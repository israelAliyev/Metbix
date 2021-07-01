import React, {Component} from 'react';

class Company extends Component {
    render() {
        return (
            <>

                <div className="company d-flex flex-column">

                    <p className="title">About of company</p>

                    <div className="info d-flex justify-content-between align-items-center flex-wrap">

                        <div className="review d-flex flex-column justify-content-center align-items-center">
                            <h1>4,7</h1>
                            <div className="stars d-flex">
                                <i className="bi bi-star-fill"/>
                                <i className="bi bi-star-fill"/>
                                <i className="bi bi-star-fill"/>
                                <i className="bi bi-star-fill"/>
                                <i className="bi bi-star-fill"/>
                            </div>
                            <p>46 product ratings</p>

                        </div>

                        <div className="photo align-items-center cursor-pointer">

                            <div className="image">

                                <img src="/images/pro9.png" alt=""/>
                            </div>

                            <p>Veysel Oglu Group</p>

                        </div>


                        <div className="little-info">
                            <p>Email: Space.y@inbox.ru</p>
                            <p>Phone: +994 70 518 40 97</p>
                            <p>Country/City: Azerbaijan Gakh</p>
                            <p>Adress: Sagdan 6 ci ev</p>
                            <p>Year Established: 2000</p>
                            <p>Employees: 97</p>
                            <p>Filials: Azerbaijan, Turkey</p>
                            <p>Business type: Electronics</p>

                        </div>


                    </div>

                    <hr/>

                    <p className="title">Description</p>

                    <div className="description">

                        <p>
                            iPhone 12 ve iPhone 12 mini.
                            Hızını anlatmaya kelimeler yetişemez.
                            Bir akıllı telefondaki en hızlı çip olan A14 Bionic. Kenarlara kadar uzanan OLED ekran.
                            Düşmelere karşı dört kat daha iyi performans sunan Ceramic Shield.
                            Ve artık tüm kameralarda yer alan Gece modu. Muhteşem boyutlardaki iki farklı modeliyle
                            tüm bu özelliklere ev sahipliği yapan
                            iPhone 12 ile tanışın.Gece modu artık hem Geniş kamerada
                            hem de Ultra Geniş kamerada. Ve şimdi loş ışıkta olağanüstü güzellikte kareler yakalama
                            konusunda hiç olmadığı kadar yetenekli. Üstelik yeni Geniş kamera
                            yüzde 27 daha fazla ışık yakalayabiliyor. Böylece ister gündüz aydınlığında çekim
                            yapın isterseniz ay ışığında, fotoğraflarınız daha önce hiç görmediğiniz ayrıntılara ve
                            renklere ev sahipliği yapıyor.AR teknolojisini kullanarak her açıdan görüntüleyin.
                            Bu sayfayı iPhone veya iPad’inizde Safari ile açın.Apple’dan satın almanın avantajları.
                            Yeni bir iPhone satın alma konusunda sorularınız mı var? Yardıma hazırız.
                        </p>

                    </div>

                </div>

            </>
        );
    }
}

export default Company;