const path = require('path')

class GuideController {
   async getImage (req, res) {
        const url = 'https://pythonist.ru/wp-content/uploads/2020/03/photo_2021-02-03_10-47-04-350x2000-1.jpg'
        request(url).pipe(res)
        let externalReq = request(url)
        externalReq.end()
    }

    getZipFile (req, res) {        
        const file = path.join(__dirname, '../static/karmaniy_spravochnik_po_piton.zip')
        res.download(file);    
}
}
module.exports = new GuideController()