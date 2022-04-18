import React from 'react'
import img1 from '../../Image/atom.png'
import {Conten, Boxx, Image, Imgbox, Sosmed} from './ContentElement'
import {ReactLogo, Instagram, Facebook, Linkedin} from '@styled-icons/fa-brands'

const Content = () => {
    return (
        <>
            <Conten>
                <Boxx>
                    <h1>it's not react native <br/> <span>it's  REACT JS</span></h1>
                    <p>React juga dikenal sebagai React.js atau ReactJS  adalah pustaka 
                    JavaScript front-end open-source untuk membangun antarmuka pengguna atau komponen UI.
                    Itu dikelola oleh Facebook dan komunitas pengembang individu dan perusahaan.
                    React dapat digunakan sebagai basis dalam pengembangan satu halaman atau aplikasi seluler. 
                    Namun, React hanya mementingkan manajemen status dan merender status tersebut ke DOM , 
                    jadi membuat aplikasi React biasanya memerlukan 
                    penggunaan pustaka tambahan untuk perutean, serta fungsionalitas sisi klien tertentu. 
                    
                    </p>
                    <a href='/'>Learn More</a>
                </Boxx>
                <Imgbox>
                    <Image>
                        <img src={img1} style={{width:400, height:400,}}/>
                    </Image>
                </Imgbox>
            </Conten>
            <Sosmed>
                    
                    <li><a href='/'><i><ReactLogo/></i></a></li>
                    <li><a href='/'><i><Instagram/></i></a></li>
                    <li><a href='/'><i><Facebook/></i></a></li>
                    <li><a href='/'><i><Linkedin/></i></a></li>
            </Sosmed>

        </>
    )
}

export default Content
