# Database

All the Jupyter notebooks are in the [bin](bin) folder. Please go into that folder and follow the instructions below.

Step1, Step2, Step3 are the text mining pipeline that generates the data of gene-phenotype associations with the autism-related literature. Other team members in Maizie's Lab wrote these notebooks. You should run these notebooks before building an online database.

Once you have created your own MongoDB database, you can use [Capstone_Yasi](Capstone_Yasi.ipynb) to connect with your datasbase server and insert/update the data.

 ### STEP 1. Run 'Autism_genepheno_step1.ipynb' to extract sentence-level gene-phenotype pairs, their occurrences in each paper and the summary of results.
 
 ##### 1. Input are the path to gene list, phenotype list, and target papers folder ``'XML_Autism_datasets_5years'`` from STEP 0. 
 ```
#==========================================================================================================================
ASDPTO_dir = '../source/ASDPTO.csv'                 # The ASDPTO part phenotype list
UMLS_dir = '../source/UMLS.txt'                     # The UMLS part phenotype list
allGene_dir = '../source/export_latest.tsv'         # The autism-associated gene list from VariCarta database
papers_dir = '../source/XML_datasets_5year/'        # Target papers in the last five years

out_dir = '../Autism_genepheno_results/'            # default = '../Autism_genepheno_results/'
#==========================================================================================================================
```
You can download the gene list ['export_latest.tsv'](https://drive.google.com/file/d/19suxgUE5VY0jrlY8kGoX3zyb_yHptgDi/view?usp=sharing) here.

You will also need to download target papers in the last 5 years ['XML_Autism_datasets_5year'](https://drive.google.com/file/d/1pe4UDVBuo0l8NXN5SI84k4bsYUnBHDau/view?usp=sharing) here.


##### 2. Output directory named ``'../Autism_genepheno_results/'`` is shown as:
```
Autism_genepheno_results
|-Extracted_results
|   |-PMCxxxxxxx.json
|   ...
|-Sum_for_each_paper
|    |-PMCxxxxxx.txt
|    ...
|-Sum_all
     |-n_g.txt
     |-n_p.txt
     |In_Summary.txt
```
Output 1. Extracted sentence-level gene-phenotype pairs in the folder ``'Extracted_results'``. Here is an example of the extracted result in JSON format for a PMC paper (``PMCxxxxxxx.json``).
 ```
{
    "PMCid": "PMC6571119", 
    "Title": "Impaired neurodevelopmental pathways in autism spectrum disorder: a review of signaling mechanisms and crosstalk (Published on 6/15/2019)", 
    "Sentences": {
        "Sentence0": {
            "Content": "For instance, Neuroligins (NLGN), fragile X mental retardation 1 (FMR1), ubiquitin-protein ligase E3A (UBE3A), and DLX, which modulate BMP signaling, have been found to be associated with ASD [10–13].", 
            "Gene": [
                "FMR1", 
                "UBE3A"
            ], 
            "Original phenotype": [
                "mental retardation"
            ], 
            "Normolized phenotype": [
                [
                    "C0025362", 
                    "Mental retardation", 
                    "OMIM, HPO, SNOMEDCT_US", 
                    "HP:0001249"
                ]
            ], 
            "Upper level concepts (HPO only)": [
                "Abnormality of the nervous system"
            ]
        }
        ...
    }
}

```

Output 2. Occurrence of genes and phenotypes for each paper in the folder ``'Sum_for_each_paper'``. Here is an example of the results in JSON format.
 ```
{
    "PMCid": "PMC6741850", 
    "Only abstract?": "N", 
    "Number of Sentences": 40, 
    "n_g": {
        "TRPM8": 1, 
        "FMR1": 2, 
        "MB": 1, 
        "PTEN": 1
    }, 
    "n_p": {
        "['C0009443', '(Acute nasopharyngitis or rhinitis) or (common cold)', 'SNOMEDCT_US', 'NULL']": 1, 
        "['C0456909', 'Blindness', 'MSH, OMIM, SNOMEDCT_US, HPO', 'HP:0000618']": 1, 
        "['C0233577', 'Mimicry', 'SNOMEDCT_US', 'NULL']": 1
    }
}

```
Output 3. Summary of results in the folder ``'Sum_all'``. Here is an example of the summary:

 ```
Number of paper processed: 15095

Number of the articles have only abstract: 5008

Number of paper get at least one sentence: 8512

Sentences extracted: 62183

N_tot =  2754875

Unique gene list from all papers: ['PTPRE', 'TSPO', ...]

Unique normalized phenotype list from all papers: ["['C1510472', 'Dependence syndrome', 'SNOMEDCT_US', 'NULL']", "['C0008372', 'Intrahepatic cholestasis', 'OMIM, HPO, SNOMEDCT_US', 'HP:0001406']", ...]

```

 ### STEP 2. Run 'Autism_genepheno_step2.ipynb' to analyze the ``"Autism_genepheno_results"`` from STEP 2. It calculates the NPMI of each gene-phenotype pair and outputs the gene-phenotype matrix.
 ##### 1. Inputs are the path to the results from STEP 2. They are path to 'Extracted_results', 'n_p.txt', 'n_g.txt' and 'In_Summary.txt'
 ##### The dir of the input file and output file is shown in the second cell of the script.

```
#================================================================================================================================
# input file dir
json_path = '../Autism_genepheno_results/Extraced_results'              # the output file of step1
np_dir = '../Autism_genepheno_results/Sum_all/n_p.txt'                  # the output file of step1
ng_dir = '../Autism_genepheno_results/Sum_all/n_g.txt'                  # the output file of step1
In_Summary_dir='../Autism_genepheno_results/Sum_all/In_Summary.txt'     # the output file of step1
sfari_gene_dir='../source/SFARI-Gene_genes_12-11-2020release_12-19-2020export.xlsx'     # the SFARI genes file dir

# output file dir
NPMI_result_dir='../Autism_genepheno_results/NPMI_file/'                # folder of NPMI file 
#================================================================================================================================
```
##### 2. Outputs are saved under the directory named ``'../Autism_genepheno_results/NPMI_file/'``:
```
Autism_genepheno_results
|-NPMI_file
    |-NPMI.json
    |-NPMI.csv
    |-NPMI_above_zero.csv
    |-graph_matrix_01_NPMIabove0.csv
```
Output 1. The file ``‘NPMI.json'`` includes all the NPMI information of each gene-phenotype pair. Here is an example of the NPMI information of a gene-phenotype pair.
```
[
    {
        "gene": "SHANK3",
        "phenotype": "['C1853490', '22q13 Deletion Syndrome', 'MSH', 'NULL']",
        "NPMI": 0.607088439701336,
        "gene_sfari_class": 1.0,
        "n_g": 1964,  # the number of sentences mentioning the gene
        "n_p": 256,   # the number of sentences mentioning the phenotype
        "n_gp": 94.0  # the number of sentences where the gene and phenotype co-occurs
    },
    ...
]
```

Output 2. The NPMI results are grouped by gene in the file ``‘NPMI.csv’`` file and ``‘NPMI_above_zero.csv’``.

```
| gene   | phenotype                                                | gene_sfari_class | NPMI     | n_g  | n_p | n_gp |
|--------|----------------------------------------------------------|------------------|----------|------|-----|------|
| SHANK3 | ['C1853490', '22q13 Deletion Syndrome',   'MSH', 'NULL'] | 1                | 0.607088 | 1964 | 256 | 94   |
...

```
Output 3. The gene-phenotype matrix is in the ‘graph_matrix_01_NPMIabove0.csv’ file. The matrix shows the quantitative relationship between gene and phenotype. Each row refers to a gene and each column refers to a phenotype. If the NPMI value of a gene-phenotype pair is positive, the value in the gene-phenotype matrix is 1, else 0. 


```
|         | ['C1535926', 'Child Mental Disorders', 'MSH', 'NULL'] | ['C0038271', 'Repetitive movements', 'HPO','HP:0000733'] | ['C0019247', 'Genetic Diseases', 'MSH','NULL'] |   |   |   |
|---------|-------------------------------------------------------|----------------------------------------------------------|------------------------------------------------|---|---|---|
| SCN2A   | 1                                                     | 0                                                        | 1                                              |   |   |   |
| CACNA1C | 1                                                     | 1                                                        | 1                                              |   |   |   |
| AFF2    | 1                                                     | 0                                                        | 1                                              |   |   |   |
|         |                                                       |                                                          |                   

```

#### Final output files (gene-phenotype associations) ['NPMI.csv'](https://drive.google.com/file/d/1i3jS1Zrn2KREIo4XYrhpVsirpzB_zfpN/view?usp=sharing) and  ['NPMI_above_zero.csv'](https://drive.google.com/file/d/1rwBO0GUDsaA9l7LHJ_gEAECj1ISbDtGV/view?usp=sharing) can be downloaded from here.


### STEP 3. Run 'Autism_genepheno_step3.ipynb' to extract each gene's phenotype information.
Read the file [here](https://github.com/maiziezhoulab/Autism_GenePheno/blob/master/analysis/Step3_README.md).


### Step4: Run 'Capstone_Yasi.ipynb' to insert the data into the database.

Before this step, you need to do somethings:
- First, create your own MongoDB account ((MongoDB Atlas)[https://account.mongodb.com/account/login]). 
- Second, create a database called "Gene".
- Third, inside the database, create two collections called "papers" (store the papers information) and "genes" (store the gene's summary reports).

Then, you can run the notebook.
Inside the notebook, if you want to connect to your local MongoDB, you can keep `myclient = MongoClient("mongodb://localhost:27017")`. If you you want to connect to the MongoDB in the Cloud, you need to change the `myclient = MongoClient("mongodb://localhost:27017")` to your own MongoDB URL.
