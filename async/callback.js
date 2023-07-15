function periksaDokter(jumlAntrian, callback) {
    if (jumlAntrian > 20) {
        callback(false)
    } else if (jumlAntrian < 10) {
        callback(true)
    }
}

const jmlAntrian = 8
periksaDokter(jmlAntrian, (sebentarLagi)=>{
    if (sebentarLagi) {
     console.log("saya akan menunggu");   
    } else {
        console.log("saya akan keluar dulu");
    }
})