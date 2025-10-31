let potencia=(base, exponenete)=>{
    if(exponenete==0) return 1;
    if(exponenete==1) return base;
    return base*potencia(base,exponenete-1);
}
console.log(potencia(3,4));