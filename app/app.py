from flask import Flask, jsonify, request, send_from_directory, render_template
import json
import os
import time
from flask_pymongo import PyMongo
import dns
import pymongo
# comment out import CORS in the deployment mode
from flask_cors import CORS


# create the app

app = Flask(__name__, static_url_path='', static_folder='build', template_folder="build")
app.config["MONGO_URI"] = "mongodb+srv://maizie:qwertyuiop123@gene.njw4a.mongodb.net/Gene?retryWrites=true&w=majority"
# comment out CORS(app) in the deployment mode
CORS(app, resources={r"/*": {"origins": "*"}})
mongo = PyMongo(app)

@app.route("/*")
@app.route("/", defaults={'path':''})
@app.route('/<path:path>')
def serve(path):
    # return send_from_directory(app.static_folder,'index.html')
    return render_template("index.html")

@app.route('/api/home')
def say_hello_world():
    collection = mongo.db.papers
    papers = collection.find().sort('_id').limit(400)
    output = []
    key = 0

    for i in papers:
        output.append({'title' : i['Title'], 
                       'pmc_id': i['PMCid'], 
                       'date': i['Title'].split(' ')[-1][:-1], 
                       'key': key, 
                       'gene_type': i['gene_type'], 
                       'sentences': i['Sentences']})
        key = key + 1
    return jsonify({'result': output})



@app.route('/api/searchPaper/', methods=['POST'])
def api_post():
    collection = mongo.db.papers
    req = request.json
    out = []
    result = collection.find({"$or": [{"PMCid": {"$regex": req}}, 
                              {"Title": {"$regex": req}}, {"gene_type": {
                                  "$elemMatch": {
                                      "$elemMatch": { "$in": [req]}}}}]})
    key = 0
    
    for i in result:
        out.append({'title' : i['Title'], 'pmc_id': i['PMCid'], 
                    'date': i['Title'].split(' ')[-1][:-1],  
                    'key': key, 
                    'gene_type': i['gene_type'], 'sentences': i['Sentences']})
        key = key + 1
    return jsonify({'result': out})
    
        
@app.route('/api/searchGene/', methods=['POST', 'GET'])
def search_gene():
    if request.method == 'POST':
        gene_list = mongo.db.genes
        req = request.json
        out = []
        result = gene_list.find_one({"Gene name": {"$regex": req}})

        # out.append({'name' : result['Gene name'], 'type': result['Gene sfari class'], 'summary': result['Summary']})
        if result is None:
            return jsonify(
                        {
                        'paper_num': 0,
                        'sentence_num': 0
                        })
        
        return jsonify({'name' : result['Gene name'], 
                        'type': result['Gene sfari class'], 
                        'related_npmi': result['Related phenotype NPMI'],
                        'paper_num': result['Summary']['Paper number'],
                        'sentence_num': result['Summary']['Sentence number']
                        })

    else:
        return jsonify({'responses': "Hello"})



if __name__ == '__main__':
    # deployment mode
    # app.run(host='0.0.0.0') # start the flask program
    
    # local mode
    app.run(debug=True)