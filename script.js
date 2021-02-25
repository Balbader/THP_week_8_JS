/*const greeting = "Hello World";
console.log(greeting);*/

// Defining the data of amino acids and codons
const aminoTable = new Map([
  ["Leucine", ["UUA", "UUG", "CUU", "CUC", "CUA", "CUG"]],
  ["Phenylalanine", ["UUU", "UUC"]],
  ["Serine", ["UCU", "UCC", "UCA", "UCG", "AGU", "AGC"]]
]);

// Function to translate from codon to amino
const aminoConversion = (code) => {
  for(const [amino, codes] of aminoTable) {
    if(codes.includes(code)){
      return amino;
    }
  }
};

aminoConversion("UUU");