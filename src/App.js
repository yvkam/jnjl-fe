import './App.css';
import {Helmet} from "react-helmet";
import {useEffect, useState} from "react";

function App() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://www.googleapis.com/calendar/v3/calendars/i181miu11ua036lkigmloqvjps@group.calendar.google.com/events?key=AIzaSyA2zRmepRB48wwT1ZJm-fXouFy4mQHD3yo")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    setIsLoaded(true);
                    setItems(result.items);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    return (
        <div>
            {/* ======= Header ======= */}
            <header id="header">
                <div className="container">
                    <div id="logo" className="pull-left">
                        {/* Uncomment below if you prefer to use a text logo */}
                        {/* <h1><a href="#intro">The<span>Event</span></a></h1>*/}
                        <a className="scrollto" href="#">
                            <img src="assets/img/Logo2.png" height={40} width={120}/>
                            {/*                <span class="d-none d-md-block">La Jeunesse de la Nouvelle Jerusalem Liège</span>*/}
                        </a>
                        {/*            <a href="index.html" class="scrollto"><img src="assets/img/logo.png" alt="" title=""></a>*/}
                    </div>
                    <nav id="nav-menu-container">
                        <ul className="nav-menu">
                            <li className="menu-active"><a href="index.html">Acceuil</a></li>
                            <li><a href="#about">Info</a></li>
                            <li><a href="#speakers">Orateurs</a></li>
                            <li><a href="#schedule">Programme</a></li>
                            {/*                <li><a href="#gallery">Gallery</a></li>*/}
                            <li className="buy-tickets"><a href="#buy-tickets">Inscription</a></li>
                        </ul>
                    </nav>
                    {/* #nav-menu-container */}
                </div>
            </header>
            {/* End Header */}
            {/* ======= Intro Section ======= */}
            <section id="intro">
                <div className="intro-container" data-aos="zoom-in" data-aos-delay={100}>
                    {/* Countdown 1*/}
                    <div className="rounded bg-gradient-1 text-white shadow text-center mb-1">
                        <h1 className="mb-4 pb-0">La retraite de la<br/><span>jeunesse</span> de la NJ Liège</h1>
                        <p className="mb-4 pb-0">Du 12 au 14 Fevrier 2021</p>
                        <div id="clock-b" className="countdown-circles d-flex flex-wrap justify-content-center pt-4"/>
                    </div>
                    {/**/}
                    {/*        <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="venobox play-btn mb-4" data-vbtype="video"*/}
                    {/*                   data-autoplay="true"></a>*/}
                    <a href="#buy-tickets" className="about-btn scrollto">S'inscrire</a>
                </div>
            </section>
            {/* End Intro Section */}
            <main id="main">
                <div id="root"/>
                {/* ======= About Section ======= */}
                <section id="about">
                    <div className="container" data-aos="fade-up">
                        <div className="row">
                            <div className="col-lg-6">
                                <h2>Info</h2>
                                <p>Cette année notre retraite va se faire de manière virtuelle depuis la maison</p>
                            </div>
                            <div className="col-lg-3">
                                <h3>Où</h3>
                                <p>Sur Zoom et Youtube</p>
                            </div>
                            <div className="col-lg-3">
                                <h3>Quand</h3>
                                <p>Du vendredi à dimanche<br/>12-14 Fevrier</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End About Section */}
                {/* ======= Speakers Section ======= */}
                <section id="speakers">
                    <div className="container" data-aos="fade-up">
                        <div className="section-header">
                            <h2>Orateurs</h2>
                            <p>Nous aurons l'honneur d'avoir avec nous</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="speaker" data-aos="fade-up" data-aos-delay={100}>
                                    <img src="assets/img/speakers/1.jpg" alt="Speaker 1" className="img-fluid"/>
                                    <div className="details">
                                        <h3><a href="speaker-details.html">Brenden Legros</a></h3>
                                        <p>Quas alias incidunt</p>
                                        <div className="social">
                                            <a href><i className="fa fa-twitter"/></a>
                                            <a href><i className="fa fa-facebook"/></a>
                                            <a href><i className="fa fa-google-plus"/></a>
                                            <a href><i className="fa fa-linkedin"/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="speaker" data-aos="fade-up" data-aos-delay={200}>
                                    <img src="assets/img/speakers/2.jpg" alt="Speaker 2" className="img-fluid"/>
                                    <div className="details">
                                        <h3><a href="speaker-details.html">Hubert Hirthe</a></h3>
                                        <p>Consequuntur odio aut</p>
                                        <div className="social">
                                            <a href><i className="fa fa-twitter"/></a>
                                            <a href><i className="fa fa-facebook"/></a>
                                            <a href><i className="fa fa-google-plus"/></a>
                                            <a href><i className="fa fa-linkedin"/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="speaker" data-aos="fade-up" data-aos-delay={300}>
                                    <img src="assets/img/speakers/3.jpg" alt="Speaker 3" className="img-fluid"/>
                                    <div className="details">
                                        <h3><a href="speaker-details.html">Cole Emmerich</a></h3>
                                        <p>Fugiat laborum et</p>
                                        <div className="social">
                                            <a href><i className="fa fa-twitter"/></a>
                                            <a href><i className="fa fa-facebook"/></a>
                                            <a href><i className="fa fa-google-plus"/></a>
                                            <a href><i className="fa fa-linkedin"/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Speakers Section */}
                {/* ======= Schedule Section ======= */}
                <section id="schedule" className="section-with-bg">
                    <div className="container" data-aos="fade-up">
                        <div className="section-header">
                            <h2>Programme</h2>
                            <p>Voici le programme de la retraite</p>
                        </div>
                        <ul className="nav nav-tabs" role="tablist" data-aos="fade-up" data-aos-delay={100}>
                            <li className="nav-item">
                                <a className="nav-link active" href="#day-1" role="tab" data-toggle="tab">Jour 1</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#day-2" role="tab" data-toggle="tab">Jour 2</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#day-3" role="tab" data-toggle="tab">Jour 3</a>
                            </li>
                        </ul>
                        {/*            <h3 class="sub-heading">Voluptatem nulla veniam soluta et corrupti consequatur neque eveniet officia. Eius*/}
                        {/*                necessitatibus voluptatem quis labore perspiciatis quia.</h3>*/}
                        <div className="tab-content row justify-content-center" data-aos="fade-up" data-aos-delay={200}>
                            {/* Schdule Day 1 */}
                            <div role="tabpanel" className="col-lg-9 tab-pane fade show active" id="day-1">
                                <div className="row schedule-item">
                                    <div className="col-md-2">
                                        <time>09:30 AM</time>
                                    </div>
                                    <div className="col-md-10">
                                        <h4>Registration</h4>
                                        <p>Fugit voluptas iusto maiores temporibus autem numquam magnam.</p>
                                    </div>
                                </div>
                                <div className="row schedule-item">
                                    <div className="col-md-2">
                                        <time>10:00 AM</time>
                                    </div>
                                    <div className="col-md-10">
                                        <div className="speaker">
                                            <img src="assets/img/speakers/1.jpg" alt="Brenden Legros"/>
                                        </div>
                                        <h4>Keynote <span>Brenden Legros</span></h4>
                                        <p>Facere provident incidunt quos voluptas.</p>
                                    </div>
                                </div>
                                <div className="row schedule-item">
                                    <div className="col-md-2">
                                        <time>11:00 AM</time>
                                    </div>
                                    <div className="col-md-10">
                                        <div className="speaker">
                                            <img src="assets/img/speakers/2.jpg" alt="Hubert Hirthe"/>
                                        </div>
                                        <h4>Et voluptatem iusto dicta nobis. <span>Hubert Hirthe</span></h4>
                                        <p>Maiores dignissimos neque qui cum accusantium ut sit sint inventore.</p>
                                    </div>
                                </div>
                                <div className="row schedule-item">
                                    <div className="col-md-2">
                                        <time>12:00 AM</time>
                                    </div>
                                    <div className="col-md-10">
                                        <div className="speaker">
                                            <img src="assets/img/speakers/3.jpg" alt="Cole Emmerich"/>
                                        </div>
                                        <h4>Explicabo et rerum quis et ut ea. <span>Cole Emmerich</span></h4>
                                        <p>Veniam accusantium laborum nihil eos eaque accusantium aspernatur.</p>
                                    </div>
                                </div>
                                <div className="row schedule-item">
                                    <div className="col-md-2">
                                        <time>02:00 PM</time>
                                    </div>
                                    <div className="col-md-10">
                                        <div className="speaker">
                                            <img src="assets/img/speakers/4.jpg" alt="Jack Christiansen"/>
                                        </div>
                                        <h4>Qui non qui vel amet culpa sequi. <span>Jack Christiansen</span></h4>
                                        <p>Nam ex distinctio voluptatem doloremque suscipit iusto.</p>
                                    </div>
                                </div>
                                <div className="row schedule-item">
                                    <div className="col-md-2">
                                        <time>03:00 PM</time>
                                    </div>
                                    <div className="col-md-10">
                                        <div className="speaker">
                                            <img src="assets/img/speakers/5.jpg" alt="Alejandrin Littel"/>
                                        </div>
                                        <h4>Quos ratione neque expedita asperiores. <span>Alejandrin Littel</span></h4>
                                        <p>Eligendi quo eveniet est nobis et ad temporibus odio quo.</p>
                                    </div>
                                </div>
                                <div className="row schedule-item">
                                    <div className="col-md-2">
                                        <time>04:00 PM</time>
                                    </div>
                                    <div className="col-md-10">
                                        <div className="speaker">
                                            <img src="assets/img/speakers/6.jpg" alt="Willow Trantow"/>
                                        </div>
                                        <h4>Quo qui praesentium nesciunt <span>Willow Trantow</span></h4>
                                        <p>Voluptatem et alias dolorum est aut sit enim neque veritatis.</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Schdule Day 1 */}
                            {/* Schdule Day 2 */}
                            <div role="tabpanel" className="col-lg-9  tab-pane fade" id="day-2">
                                <div className="row schedule-item">
                                    <div className="col-md-2">
                                        <time>10:00 AM</time>
                                    </div>
                                    <div className="col-md-10">
                                        <div className="speaker">
                                            <img src="assets/img/speakers/1.jpg" alt="Brenden Legros"/>
                                        </div>
                                        <h4>Libero corrupti explicabo itaque. <span>Brenden Legros</span></h4>
                                        <p>Facere provident incidunt quos voluptas.</p>
                                    </div>
                                </div>
                                <div className="row schedule-item">
                                    <div className="col-md-2">
                                        <time>11:00 AM</time>
                                    </div>
                                    <div className="col-md-10">
                                        <div className="speaker">
                                            <img src="assets/img/speakers/2.jpg" alt="Hubert Hirthe"/>
                                        </div>
                                        <h4>Et voluptatem iusto dicta nobis. <span>Hubert Hirthe</span></h4>
                                        <p>Maiores dignissimos neque qui cum accusantium ut sit sint inventore.</p>
                                    </div>
                                </div>
                                <div className="row schedule-item">
                                    <div className="col-md-2">
                                        <time>12:00 AM</time>
                                    </div>
                                    <div className="col-md-10">
                                        <div className="speaker">
                                            <img src="assets/img/speakers/3.jpg" alt="Cole Emmerich"/>
                                        </div>
                                        <h4>Explicabo et rerum quis et ut ea. <span>Cole Emmerich</span></h4>
                                        <p>Veniam accusantium laborum nihil eos eaque accusantium aspernatur.</p>
                                    </div>
                                </div>
                                <div className="row schedule-item">
                                    <div className="col-md-2">
                                        <time>02:00 PM</time>
                                    </div>
                                    <div className="col-md-10">
                                        <div className="speaker">
                                            <img src="assets/img/speakers/4.jpg" alt="Jack Christiansen"/>
                                        </div>
                                        <h4>Qui non qui vel amet culpa sequi. <span>Jack Christiansen</span></h4>
                                        <p>Nam ex distinctio voluptatem doloremque suscipit iusto.</p>
                                    </div>
                                </div>
                                <div className="row schedule-item">
                                    <div className="col-md-2">
                                        <time>03:00 PM</time>
                                    </div>
                                    <div className="col-md-10">
                                        <div className="speaker">
                                            <img src="assets/img/speakers/5.jpg" alt="Alejandrin Littel"/>
                                        </div>
                                        <h4>Quos ratione neque expedita asperiores. <span>Alejandrin Littel</span></h4>
                                        <p>Eligendi quo eveniet est nobis et ad temporibus odio quo.</p>
                                    </div>
                                </div>
                                <div className="row schedule-item">
                                    <div className="col-md-2">
                                        <time>04:00 PM</time>
                                    </div>
                                    <div className="col-md-10">
                                        <div className="speaker">
                                            <img src="assets/img/speakers/6.jpg" alt="Willow Trantow"/>
                                        </div>
                                        <h4>Quo qui praesentium nesciunt <span>Willow Trantow</span></h4>
                                        <p>Voluptatem et alias dolorum est aut sit enim neque veritatis.</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Schdule Day 2 */}
                            {/* Schdule Day 3 */}
                            <div role="tabpanel" className="col-lg-9  tab-pane fade" id="day-3">
                                <div className="row schedule-item">
                                    <div className="col-md-2">
                                        <time>10:00 AM</time>
                                    </div>
                                    <div className="col-md-10">
                                        <div className="speaker">
                                            <img src="assets/img/speakers/2.jpg" alt="Hubert Hirthe"/>
                                        </div>
                                        <h4>Et voluptatem iusto dicta nobis. <span>Hubert Hirthe</span></h4>
                                        <p>Maiores dignissimos neque qui cum accusantium ut sit sint inventore.</p>
                                    </div>
                                </div>
                                <div className="row schedule-item">
                                    <div className="col-md-2">
                                        <time>11:00 AM</time>
                                    </div>
                                    <div className="col-md-10">
                                        <div className="speaker">
                                            <img src="assets/img/speakers/3.jpg" alt="Cole Emmerich"/>
                                        </div>
                                        <h4>Explicabo et rerum quis et ut ea. <span>Cole Emmerich</span></h4>
                                        <p>Veniam accusantium laborum nihil eos eaque accusantium aspernatur.</p>
                                    </div>
                                </div>
                                <div className="row schedule-item">
                                    <div className="col-md-2">
                                        <time>12:00 AM</time>
                                    </div>
                                    <div className="col-md-10">
                                        <div className="speaker">
                                            <img src="assets/img/speakers/1.jpg" alt="Brenden Legros"/>
                                        </div>
                                        <h4>Libero corrupti explicabo itaque. <span>Brenden Legros</span></h4>
                                        <p>Facere provident incidunt quos voluptas.</p>
                                    </div>
                                </div>
                                <div className="row schedule-item">
                                    <div className="col-md-2">
                                        <time>02:00 PM</time>
                                    </div>
                                    <div className="col-md-10">
                                        <div className="speaker">
                                            <img src="assets/img/speakers/4.jpg" alt="Jack Christiansen"/>
                                        </div>
                                        <h4>Qui non qui vel amet culpa sequi. <span>Jack Christiansen</span></h4>
                                        <p>Nam ex distinctio voluptatem doloremque suscipit iusto.</p>
                                    </div>
                                </div>
                                <div className="row schedule-item">
                                    <div className="col-md-2">
                                        <time>03:00 PM</time>
                                    </div>
                                    <div className="col-md-10">
                                        <div className="speaker">
                                            <img src="assets/img/speakers/5.jpg" alt="Alejandrin Littel"/>
                                        </div>
                                        <h4>Quos ratione neque expedita asperiores. <span>Alejandrin Littel</span></h4>
                                        <p>Eligendi quo eveniet est nobis et ad temporibus odio quo.</p>
                                    </div>
                                </div>
                                <div className="row schedule-item">
                                    <div className="col-md-2">
                                        <time>04:00 PM</time>
                                    </div>
                                    <div className="col-md-10">
                                        <div className="speaker">
                                            <img src="assets/img/speakers/6.jpg" alt="Willow Trantow"/>
                                        </div>
                                        <h4>Quo qui praesentium nesciunt <span>Willow Trantow</span></h4>
                                        <p>Voluptatem et alias dolorum est aut sit enim neque veritatis.</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Schdule Day 2 */}
                        </div>
                    </div>
                </section>
                {/* End Schedule Section */}
                {/* ======= Buy Ticket Section ======= */}
                <section id="buy-tickets">
                    <div className="container" data-aos="fade-up">
                        <div className="section-header">
                            <h2>Inscription</h2>
                            <p>Veuillez remplir le formulaire ci-dessous pour valider votre inscription</p>
                        </div>
                        <div className="row">
                            <div className="col-md-8 mr-auto ml-auto">
                                <div className="container" id="ff-compose"/>
                                <Helmet>

                                    <script async defer
                                            src="https://formfacade.com/include/100485103499555406844/form/1FAIpQLSeUCnaSt_Qn0hTp5iuMSspX8hQIPIR79KR9y1n21oZoEiLMiA/bootstrap.js?div=ff-compose"></script>
                                </Helmet>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Buy Ticket Section */}
                {/* =======  F.A.Q Section ======= */}
                <section id="faq" className="section-with-bg">
                    <div className="container" data-aos="fade-up">
                        <div className="section-header">
                            <h2>F.A.Q </h2>
                        </div>
                        <div className="row justify-content-center" data-aos="fade-up" data-aos-delay={100}>
                            <div className="col-lg-9">
                                <ul id="faq-list">
                                    <li>
                                        <a data-toggle="collapse" className="collapsed" href="#faq1">Comment s'inscrire
                                            aux ateliers? <i className="fa fa-minus-circle"/></a>
                                        <div id="faq1" className="collapse" data-parent="#faq-list">
                                            <p>
                                                Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat
                                                lacus laoreet
                                                non curabitur gravida. Venenatis lectus magna fringilla urna porttitor
                                                rhoncus dolor
                                                purus non.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            {/* End #main */}
            {/* ======= Footer ======= */}
            <footer id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 footer-info">
                                <img src="assets/img/Logo2.png" height={40} width={120}/>
                                <p>In alias aperiam. Placeat tempore facere. Officiis voluptate ipsam vel eveniet est
                                    dolor et totam
                                    porro. Perspiciatis ad omnis fugit molestiae recusandae possimus. Aut consectetur id
                                    quis. In
                                    inventore consequatur ad voluptate cupiditate debitis accusamus repellat cumque.</p>
                            </div>
                            <div className="col-lg-4 col-md-6 footer-links">
                                <h4>Lien</h4>
                                <ul>
                                    <li><i className="fa fa-angle-right"/> <a href="#">Acceuil</a></li>
                                    <li><i className="fa fa-angle-right"/> <a href="#">Info</a></li>
                                    <li><i className="fa fa-angle-right"/> <a href="#">Orateurs</a></li>
                                    <li><i className="fa fa-angle-right"/> <a href="#">Programme</a></li>
                                    <li><i className="fa fa-angle-right"/> <a href="#">Inscription</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-6 footer-contact">
                                <h4>Contact Us</h4>
                                <p>
                                    <strong>Phone:</strong> +1 5589 55488 55<br/>
                                    <strong>Email:</strong> info@example.com<br/>
                                </p>
                                <div className="social-links">
                                    <a href="#" className="twitter"><i className="fa fa-twitter"/></a>
                                    <a href="#" className="facebook"><i className="fa fa-facebook"/></a>
                                    <a href="#" className="instagram"><i className="fa fa-instagram"/></a>
                                    <a href="#" className="google-plus"><i className="fa fa-snapchat-ghost"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="copyright">
                        © Copyright <strong>Jeunesse NJL</strong>. All Rights Reserved
                    </div>
                    <div className="credits">
                        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>--&gt;
                    </div>
                </div>
            </footer>
            {/* End  Footer */}
            <a href="#" className="back-to-top"><i className="fa fa-angle-up"/></a>
        </div>
    );
}

export default App;
