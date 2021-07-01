// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase())
    }
    return newStrand
}


const pAequorFactory = (num, bases) => {
    return{
        specimenNum : num,
        dna: bases,
        mutate() {
            this.dna[Math.floor(Math.random() * this.dna.length - 1)] = returnRandBase();
            return this.dna;
        },
        compareDNA(obj){
            let num = 0;
            for(let i = 0; i < this.dna.length; i++) {
                if(this.dna[i] === obj.dna[i]){
                    num++;
                }
            }
            console.log(`specimen #1 and specimen #2 have ${num/this.dna.length}% DNA in common`);
            },

        willLikelySurvive(){
            let count = 0;
            for(let i = 0; i < this.dna.length; i++){
                if(this.dna[i] === 'C' || this.dna[i] === 'G'){
                    count++;
                }
            }
            return count/this.dna.length >= .6;
        }
    };
};








