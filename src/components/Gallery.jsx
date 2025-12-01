import { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        {
            url: 'https://scontent.fisb12-1.fna.fbcdn.net/v/t39.30808-6/592300193_4235411180039988_3471050568456063426_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEBamNsKKyCbiyqATfxDU4YE2mtpRWC-HUTaa2lFYL4dbdpgifpvUgkDJ0fmLPvbSVeka8KOxTZsS111WCFHuZj&_nc_ohc=GQnsCSxMCfkQ7kNvwHUIoFW&_nc_oc=AdnLOirSWAp-2U1ruLIUyp6BknZRQKaz7PlVMjE02impYnjAZbO_BJCcQwd__s9dggi6dIBXuFZM1FmFDOkzx92v&_nc_zt=23&_nc_ht=scontent.fisb12-1.fna&_nc_gid=AMf1plp3vsqXyczP1x7qtQ&oh=00_AfiAmJqSVIG1LAEF4EtUPZFsJiPSbkrPpe-aoHVKWIu7Ig&oe=6932A403',
            title: 'Senior Training',
            category: 'Training'
        },
        {
            url: 'https://scontent.fisb12-1.fna.fbcdn.net/v/t39.30808-6/582968556_4221078464806593_6032628051459627647_n.jpg?stp=cp6_dst-jpg_s1080x2048_tt6&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHcPJxBEqBck9j26hMbUpZ3fXnPEI-mTaJ9ec8Qj6ZNovm5SqM-br3RudCOWMnXmY4vODhQtrhLQvMfQ7o-oit-&_nc_ohc=E7ZS1vDqgDcQ7kNvwFOPihv&_nc_oc=AdkM71G-pEXAwPFlMSL_0ukWixXm-fOC3hpuk8_GGzdRNs0fUHhrYUOixsYoUYDDAnYhvoHtpI269Fw-SjuYeoq5&_nc_zt=23&_nc_ht=scontent.fisb12-1.fna&_nc_gid=d0uju4xHHvVZJg1EQdbjOA&oh=00_AfiABnnDM17G9fHc21MaNrtq-Oi3zi_cNVIdj2PpXlERVw&oe=6932AEBE',
            title: 'Junior Match',
            category: 'Team'
        },
        {
            url: 'https://scontent.fisb12-1.fna.fbcdn.net/v/t39.30808-6/584784032_4222910757956697_3031335167531333884_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFsd0GCKtpcUbzhxSm9psWZLoWj5_uiKN8uhaPn-6Io3x4BR-gWUF5t3GrX9erzs8SFZYNPDhtRPbv8FgT4-_JB&_nc_ohc=SWEolDq3zOQQ7kNvwEaWmCJ&_nc_oc=AdnZgGSXLPTCuzJLyVrbxYkNtJwL_zeQMIt7CDNrD8ClXL7LkhyrUbMeHDH2KG62lb5Nlyct8-nXsAh8JhUpE-EP&_nc_zt=23&_nc_ht=scontent.fisb12-1.fna&_nc_gid=C-CaQdIsIx9HYI_yYEtRNA&oh=00_AfiEGn8EP_loeZ3CNpJ4gJjaJYptDSTxEuq_xOKrObbLbw&oe=6932BE96',
            title: 'Training Session',
            category: 'Training'
        },
        {
            url: 'https://scontent.fisb12-1.fna.fbcdn.net/v/t39.30808-6/568382673_4193511900896583_5755569832979750998_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGHPbxgivKcubLgp16ic_qsHoBI06gacoQegEjTqBpyhOhKrOSI4zxgXX2VJY5gPViqLdSEP7wdecCamegZpyn2&_nc_ohc=rk3qKE5xYH4Q7kNvwFQCxrx&_nc_oc=AdlPEvJJsImng9NnCATQi08eRpEOzYgBbcKZ1ebnz8V83896hnvKmxBUYoROf6adhbxvDjvXAwGsCbpQilQKYCDW&_nc_zt=23&_nc_ht=scontent.fisb12-1.fna&_nc_gid=ULueEnztZZX0QkB-N-Dy_Q&oh=00_AfiTXeAfh2VoK5DL_foCfL97S8jLURTN526Mo8TCnohCUw&oe=6932A8C4',
            title: 'Match Action',
            category: 'Training'
        },
        {
            url: 'https://scontent.fisb12-1.fna.fbcdn.net/v/t39.30808-6/577754188_4211778539069919_3095078609895522339_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGsper4mWbeRgkLXB6DeF7YNKmP4Jj25m40qY_gmPbmblFtg2HDEe-suBwsa0J5-_7Zv14m8g6yRChZmcciGBX4&_nc_ohc=MeKXU3jmJZsQ7kNvwF-I8WB&_nc_oc=AdnO0UNejyPuDvCfS59YmwtBH7QQkPmLIXRcX5DScQJeW6vegWKhLeYFrS4CFDBoHWpQsJ3ZPJMVtwrFByF95-QD&_nc_zt=23&_nc_ht=scontent.fisb12-1.fna&_nc_gid=llgxHTvnnKdGsuyCB4slaA&oh=00_AfjNZ1hMhlSscnMUjbXIXLAeMm4wgqot3V1Cl59CWKA15Q&oe=6932A8DE',
            title: 'Team Huddle',
            category: 'Team'
        },
        {
            url: 'https://scontent.fisb12-1.fna.fbcdn.net/v/t39.30808-6/572387487_4202228103358296_1942826348424393416_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFMj4hRjSUEZ2YZBZ8wot6lekpKs1gL8gd6SkqzWAvyB25CGdtZBohBVu04H1ih6ysdDpwiATBAqPuGMC6Ue-E3&_nc_ohc=vVD_Sxquhq8Q7kNvwFtjTMB&_nc_oc=AdmMl1nEfP7GB7cZgR_eBWP44UmfaHLXpBWsLexp8ckJNsnIV3FZtcuvlbYHz73Qoun3fx6wO7s2GoN-gfmh-GwM&_nc_zt=23&_nc_ht=scontent.fisb12-1.fna&_nc_gid=QskKiOosxsjiflDqruExyQ&oh=00_AfiHaCQlFz6o-fj066tal9KmUZd6wXcAdIpR8DJTK5qB7A&oe=6932A954',
            title: 'Youth Players',
            category: 'Team'
        },
        {
            url: 'https://scontent.fisb12-1.fna.fbcdn.net/v/t39.30808-6/573925986_4202227990024974_2081913869307121982_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG5i1lgPVpkLAR3fQRqimoQV0VY65Rf6M1XRVjrlF_ozYBZXR0t8ZssUqP0Qu9QLCnXzC7XPRLwo8DH9TcoeXtW&_nc_ohc=Q4TO7ZtmAYAQ7kNvwGCR0Em&_nc_oc=AdnDTo6-IE07LSiDNCAQDJH6gqhjZWhleWeJSqZZ2h0OkS6P8kK-HunS6eshHRNPaxYbfgQ4aJHHHJzbf2iL8hVb&_nc_zt=23&_nc_ht=scontent.fisb12-1.fna&_nc_gid=lMF1-lZeazh5cM0918Lspw&oh=00_AfjtviTwGtrfDVLbq1wqaihoYrFMaCTE9ilkH2oJm9rUbw&oe=6932C4E5',
            title: 'Skills Training',
            category: 'Training'
        },
        {
            url: 'https://scontent.fisb12-1.fna.fbcdn.net/v/t39.30808-6/585602757_4222911621289944_4470183876572384530_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEHP9SbUC5twIoe79WT1BzSRv5sp9wVWBBG_myn3BVYEIFIJA6TEsiHfpzS-6njlhzvbIh0DixJChd5puIxPUWZ&_nc_ohc=TPlmz3Qw-wsQ7kNvwEw512t&_nc_oc=AdnTRTKZhb4NiDKEBUMN98Oz8ridVnpTzo2v2npwwsFihWg4xzS6pCpw_5k9DY3gv5Yeqpt_XCji7LDj-c67ULU8&_nc_zt=23&_nc_ht=scontent.fisb12-1.fna&_nc_gid=GULXXQ177HVgaxjlnsyVYg&oh=00_Afj1GkdCjsZULpny2f1dRaIwoO-9ypGZfbF4GtZVLaNicA&oe=6932C762',
            title: 'Team Spirit',
            category: 'Team'
        }
    ];

    const openLightbox = (image) => {
        setSelectedImage(image);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <section id="gallery" className="section gallery-section">
            <div className="section-container">
                {/* Section Header */}
                <div className="section-header">
                    <h2 className="section-title">Gallery</h2>
                    <p className="section-subtitle">
                        Capturing the passion, dedication, and spirit of Pato Hornets
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="gallery-grid">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="gallery-item"
                            onClick={() => openLightbox(image)}
                        >
                            <img src={image.url} alt={image.title} className="gallery-image" />
                            <div className="gallery-overlay">
                                <span className="gallery-category">{image.category}</span>
                                <h4 className="gallery-title">{image.title}</h4>
                                <div className="gallery-icon">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path d="M16 10V22M22 16H10" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div className="lightbox" onClick={closeLightbox}>
                    <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M24 8L8 24M8 8L24 24" stroke="white" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                    </button>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <img src={selectedImage.url} alt={selectedImage.title} className="lightbox-image" />
                        <div className="lightbox-info">
                            <span className="lightbox-category">{selectedImage.category}</span>
                            <h3 className="lightbox-title">{selectedImage.title}</h3>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;
