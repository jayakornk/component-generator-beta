const publicPath = `${process.env.PUBLIC_URL}/img/screenshots`;

const Templates = [
  {
    name: 'Masthead',
    screenshot: `${publicPath}/masthead-screenshot.jpg`,
    shortcode: `[segment tag="section" style="3" bgimg="http://pages.prontomarketing.com/wp-content/uploads/2016/09/bg_masthead01.jpg" bgrepeat="no-repeat" bgposition="center center" bgattachment="scroll" bgsize="cover" spacing="huge" class="service-masthead inner-masthead"]
[row]
[column span="10" class="text-center col-md-offset-1"]
<h1 class="uppercase">Services</h1>
<p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin, tellus vitae condimentum egestas, libero dolor auctor tellus, eu consectetur neque elit quis nunc.</p>
[/column]
[/row]
[/segment]`,
    css: '',
    js: '',
  },
  {
    name: 'Service Icon',
    screenshot: `${publicPath}/service-icons-screenshot.jpg`,
    shortcode: `[segment tag="section" style="1" spacing="huge" class="service-2"]
[row]
[column span="3" class="col-sm-6"]
<div class="service">
<div class="heading flex-box align-items-center">
<img src="http://pages.prontomarketing.com/wp-content/uploads/2016/09/icon_services-B-small.png">
<h3 class="accent2"><strong>HS Services B</strong></h3>
</div>
<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qu. </p>
<a href="#" class="accent2 font-underline">Read More</a>
</div>
[/column]
[column span="3" class="col-sm-6"]
<div class="service">
<div class="heading flex-box align-items-center">
<img src="http://pages.prontomarketing.com/wp-content/uploads/2016/09/icon_services-C-small.png">
<h3 class="accent2"><strong>HS Services C</strong></h3>
</div>
<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qu. </p>
<a href="#" class="accent2 font-underline">Read More</a>
</div>
[/column]
[column span="3" class="col-sm-6"]
<div class="service">
<div class="heading flex-box align-items-center">
<img src="http://pages.prontomarketing.com/wp-content/uploads/2016/09/icon_services-D-small.png">
<h3 class="accent2"><strong>HS Services D</strong></h3>
</div>
<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qu. </p>
<a href="#" class="accent2 font-underline">Read More</a>
</div>
[/column]
[column span="3" class="col-sm-6"]
<div class="service">
<div class="heading flex-box align-items-center">
<img src="http://pages.prontomarketing.com/wp-content/uploads/2016/09/icon_services-E-small.png">
<h3 class="accent2"><strong>HS Services E</strong></h3>
</div>
<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qu. </p>
<a href="#" class="accent2 font-underline">Read More</a>
</div>
[/column]
[/row]
[/segment]`,
    css: `#service-testimonials {
    border: 0 none;
    box-shadow: none;
    margin: 0;
    background: transparent none repeat scroll 0 0;
}
#service-testimonials .slides .testimonial {
    margin: 0;
}
#service-testimonials .slide-content {
    margin: 0;
}
#service-testimonials .wooslider-control-nav {
    text-align: left;
    top: 103%;
    z-index: 9999;
}
#service-testimonials .wooslider-control-paging li a {
    background: #fff none repeat scroll 0 0;
    box-shadow: none;
}
#service-testimonials .wooslider-control-paging li .wooslider-active {
    background: #b72a2a;
}
.service-testimonials .testimonial-b .testimonial-body {
    border: 0;
    padding: 0;
}
.service-testimonials .testimonial i {
    display: none;
}
.service-testimonials .testimonial-body::before,
.service-testimonials .testimonial-body::after{
    border: 0;
    background: transparent;
}

.service .heading {
  margin-bottom: 15px;
}
.service .heading img {
    max-width: 45px;
}
.service .heading h3 {
  margin: 0 0 0 20px;
}
.service {
    margin-bottom: 40px;
}

.well-service {
    padding: 35px 65px;
}
.well-service > ul {
    padding-left: 2em;
}
.well-service > h3 {
    margin-bottom: 1.5em;
}
.well-service li::before {
    content: "";
    display: block;
    font-family: fontawesome;
    height: 0;
    left: -2em;
    margin-right: 10px;
    position: relative;
    width: 0;
}

.well-service li {
    list-style: outside none none;
}
.well-service li + li {
    margin-top: 1em;
}

@media (min-width: 992px) and (max-width: 1199px) {

}

@media  (max-width: 991px) {
    .service {
        margin: 40px 0;
    }
    .well-service {
        margin-top: 40px;
    }
    #service-testimonials .testimonial-reference img {
        max-width: 90px;
        margin-bottom: 20px;
    }
}
@media (max-width: 767px) {
    .service-masthead img {
        margin: 20px auto;
    }
    .well-service {
        padding: 20px;
    }
}`,
    js: '',
  },
  {
    name: 'Service Index A - Section 1',
    screenshot: `${publicPath}/service-index-style-a-screenshot.jpg`,
    shortcode: `[segment tag="section" style="1" spacing="huge" class="service-2"]
[row]
[column span="4" class="text-center service col-sm-6"]
<a href="#" class="no-underline"><div>
[img src="http://pages.prontomarketing.com/wp-content/uploads/2016/09/icon_services-A.png" class="aligncenter"]
<h3 class="accent2"><strong>HS Services A</strong></h3>
<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit.</p>
<span class="accent2 font-underline">Read More</span>
</div></a>
[/column]
[column span="4" class="text-center service col-sm-6"]
<a href="#" class="no-underline"><div>
[img src="http://pages.prontomarketing.com/wp-content/uploads/2016/09/icon_services-B.png" class="aligncenter"]
<h3 class="accent2"><strong>HS Services B</strong></h3>
<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit.</p>
<span class="accent2 font-underline">Read More</span>
</div></a>
[/column]
[column span="4" class="text-center service col-sm-6"]
<a href="#" class="no-underline"><div>
[img src="http://pages.prontomarketing.com/wp-content/uploads/2016/09/icon_services-C.png" class="aligncenter"]
<h3 class="accent2"><strong>HS Services C</strong></h3>
<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit.</p>
<span class="accent2 font-underline">Read More</span>
</div></a>
[/column]
[column span="4" class="text-center service col-sm-6"]
<a href="#" class="no-underline"><div>
[img src="http://pages.prontomarketing.com/wp-content/uploads/2016/09/icon_services-D.png" class="aligncenter"]
<h3 class="accent2"><strong>HS Services D</strong></h3>
<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit.</p>
<span class="accent2 font-underline">Read More</span>
</div></a>
[/column]
[column span="4" class="text-center service col-sm-6"]
<a href="#" class="no-underline"><div>
[img src="http://pages.prontomarketing.com/wp-content/uploads/2016/09/icon_services-E.png" class="aligncenter"]
<h3 class="accent2"><strong>HS Services E</strong></h3>
<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit.</p>
<span class="accent2 font-underline">Read More</span>
</div></a>
[/column]
[column span="4" class="text-center service col-sm-6"]
<a href="#" class="no-underline"><div>
[img src="http://pages.prontomarketing.com/wp-content/uploads/2016/09/icon_services-F.png" class="aligncenter"]
<h3 class="accent2"><strong>HS Services F</strong></h3>
<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit.</p>
<span class="accent2 font-underline">Read More</span>
</div></a>
[/column]
[/row]
[/segment]`,
    css: `.service div {
  border: 1px solid transparent;
  padding: 30px;
  margin-bottom: 40px;
  -moz-transition: 0.3s;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}
.service div:hover,
.service div:active,
.service div:focus {
  border-color: #dcdcdc;
}

.full-width, 
.full-width .container {
    padding: 0;
}
.full-width .container {
    max-width: 100%;
}
.full-width .container > div {
    margin: 0;
}
.full-width .col-md-6 {
    padding-bottom: 85px;
    padding-top: 85px;
    position: relative;
}
.full-width .col-md-6 > div {
    float: right;
    width: 585px;
}
.full-width .last > div {
    float: left;
}
.service-bg{
    background: url("/wp-content/uploads/2016/09/bg_img-split.jpg") no-repeat center center;
    background-size: cover;
}

/*** Media query ***/

@media (min-width: 992px) and (max-width: 1199px) {
.full-width .col-md-6 > div {
    width: 485px;
}
.full-width .service-bg {
    padding: 200px 0;
}
}

@media  (max-width: 991px) {
    .service div {
        margin-bottom: 20px;
        padding: 20px;
    }
    .full-width .col-md-6.service-bg {
        padding-bottom: 200px;
        padding-top: 200px;
    }
    .full-width .col-md-6 > div {
        float: none;
        margin: 0;
        width: 100%;
    }
    .full-width .container > div {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
    }
    .full-width .last {
        padding-bottom: 40px;
        padding-top: 40px;
    }
}

@media (max-width: 767px) {
    .subscribe-c form {
        display: block;
    }
    .full-width .col-md-6.service-bg {
        padding-bottom: 90px;
        padding-top: 90px;
    }
}`,
    js: '',
  },
];

export default Templates;
