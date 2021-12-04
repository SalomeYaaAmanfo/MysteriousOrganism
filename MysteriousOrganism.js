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
function pAequorFactory(number,arrayDNA){
  return {
    specimenNum: number,
    dna: arrayDNA,
    mutate (){
      let selectedPosition = Math.floor(Math.random() * this.dna.length)
      let selectedBase = this.dna[selectedPosition]
      mutatedBase = returnRandBase()
      console.log(selectedPosition)
      console.log(selectedBase)
      if(selectedBase !== mutatedBase){
      this.dna.splice(selectedPosition,1,mutatedBase)}
      return this.dna
    },
    compareDNA (pAequor) {
      let currentP =this.dna
      let commonBases = 0
      for(let i=0; i<currentP.length; i++){
        for(let j=0; j<pAequor.dna.length; j++){
          if(currentP[i] === pAequor.dna[j] && i == j){
            commonBases++  
          }
        }
      }
       let dnaPercentage = ((commonBases/this.dna.length)*100).toFixed(1)
       console.log(`Specimen ${this.specimenNum} and Specimen ${pAequor.specimenNum} have ${dnaPercentage}% DNA in common`)
    },
    willLikelySurvive (){
      let goodDNA = this.dna.filter(element => element ==='C' || element === 'G')
      if(goodDNA.length == this.dna.length*0.6){
        return true
      }else{
        return false
      }
    }
  }
}

let survivorOrganism = []

for(let i=0; survivorOrganism.length < 30; i++){
  let instant = pAequorFactory(i,mockUpStrand())
if(instant.willLikelySurvive() === true){
  survivorOrganism.push(instant)
}
}
console.log(survivorOrganism)
//console.log(instant2.willLikelySurvive ())





