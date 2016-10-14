<?php
  $path = $_SERVER['DOCUMENT_ROOT'];
  $path .= "/includes/";
  $current = 'home';
?>

<!DOCTYPE html>
<html lang="en">

  <!-- META TAGS  -->
  <?php $meta_description = '';?>
  <?php $meta_keywords = '';?>

  <!-- PAGE TITLE -->
  <?php $page_title = "Alex Clapperton";?>

  <!-- CRITICAL CSS - ABOVE THE FOLD -->
  <?php $critical_path = "<style type='text/css'>
    .gridGuide,.gridGuides{position:absolute;height:100%}h1,h2{color:#ff486e;font-weight:600;margin:0 0 12px;line-height:1.5}.btn_scrollTop,.siteNav_linkText,.skipLink,.skipLinks{text-align:center}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}@keyframes fadein{from{opacity:0}to{opacity:1}}.gridGuides{top:0;left:0;width:100%;z-index:-1}@media (min-width:768px){.gridGuides::after,.gridGuides::before{content:'';position:absolute;top:0;width:1px;height:100%;background:#2e353b;opacity:.15}.gridGuides::before{left:-12px}.gridGuides::after{right:-12px}}.gridGuide{width:100%;min-height:auto;z-index:1}.gridGuide:nth-of-type(1)::after,.gridGuide:nth-of-type(1)::before{content:'';position:absolute;top:0;width:1px;height:100%;background:#2e353b;opacity:.15;z-index:-1}.gridGuide:nth-of-type(1)::before{left:12px}.gridGuide:nth-of-type(1)::after{right:12px}@media (min-width:768px){.gridGuide{width:25%}.gridGuide:nth-of-type(1){left:0}.gridGuide:nth-of-type(2){left:25%}.gridGuide:nth-of-type(3){left:50%}.gridGuide:nth-of-type(4){left:75%}.gridGuide::after,.gridGuide::before{content:'';position:absolute;top:0;width:1px;height:100%;background:#2e353b;opacity:.15;z-index:-1}.gridGuide::before{left:12px}.gridGuide::after{right:12px}}*,:after,:before{box-sizing:border-box}html{font-size:16px}body{font-family:Inconsolata,sans-serif;font-size:14px;background:#e5e5e5;padding-bottom:55px;margin:0;-webkit-animation:fadein 2s;animation:fadein 2s}.mainHeader_logo,h1,h2{font-family:Dosis,sans-serif}@media (min-width:600px){body{padding-bottom:0}}h1{font-size:2em}@media screen and (min-width:400px){h1{font-size:2.25em}}@media screen and (min-width:768px){h1{font-size:2.5em}}@media screen and (min-width:992px){h1{font-size:2.75em}}h2{font-size:1.5em}@media screen and (min-width:400px){h2{font-size:1.75em}}@media screen and (min-width:768px){h2{font-size:2em}}@media screen and (min-width:992px){h2{font-size:2.2em}}p{color:#2e353b;font-size:1em;font-weight:400;line-height:1.7;margin:0 0 15px}.skipLink,a{color:#ff486e}@media screen and (min-width:400px){p{font-size:1.07143em}}@media screen and (min-width:600px){p{font-size:1.10714em}}@media screen and (min-width:768px){p{font-size:1.14286em}}@media screen and (min-width:992px){p{font-size:1.19286em}}@media screen and (min-width:1230px){p{font-size:1.20357em}}a{text-decoration:underline}.container{position:relative;padding:0 12px}@media (min-width:768px){.container{width:668px;margin:0 auto}}@media (min-width:992px){.container{width:962px}}@media (min-width:1230px){.container{width:1200px}}.skipLinks{position:absolute;top:10px;left:0;width:100%;z-index:100}.skipLink{position:absolute;top:40%;left:10%;margin:0;font-size:14.7px;font-weight:600}.skipLink--hidden{border:0;width:130px;height:.0625rem;overflow:hidden;padding:0;position:absolute}.btn_scrollTop{display:block;position:fixed;right:-60px;bottom:20px;width:40px;height:40px;background:#ff486e;border-radius:50%;z-index:20;opacity:0;box-shadow:3px 4px 9px 0 rgba(0,0,0,.15)}.siteHeader,.siteNav{z-index:30;background:#fff}.btn_scrollIcon{width:50%;height:100%;fill:#fff}.siteHeader{position:relative;width:100%}@media (min-width:768px){.siteHeader{position:fixed;top:0;left:0;padding:5px 0}.siteHeader_flex{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}}.mainHeader{width:100%;height:auto;padding:10px 0;margin:0 auto}@media (min-width:768px){.mainHeader{width:auto;padding:0;margin:0;flex-grow:1}}@media (min-width:992px){.mainHeader{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;width:31.333333%}}.mainHeader_logo{display:block;color:#2e353b;font-size:28px;font-weight:600;line-height:normal;text-decoration:none}.mainHeader_logo .mainHeader_logoPeriod{color:#ff486e;margin-right:2px}@media (min-width:768px){.mainHeader_logo{display:inline-block}}.siteNav{position:fixed;bottom:0;right:0;width:100%;height:55px;padding:0;margin:0 auto;border-top:1px solid #bfbfbf;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}@media (min-width:768px){.siteNav{position:static;width:auto;border:none;flex-grow:1}}.siteBanner,.siteSection{position:relative}@media (min-width:992px){.siteNav{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:37.333333%}}.siteNav_linkIcon{width:25px;height:25px;fill:#2e353b;margin-bottom:3px}.siteNav_linkText{display:block;color:#2e353b;font-size:.95rem}.socialHeader_flex{display:none}@media (min-width:992px){.socialHeader_flex{width:31.333333%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.socialHeader_flexItem{margin-right:30px}.socialHeader_flexItem:last-child{margin-right:0}}.socialHeader_link{display:block;width:28px;height:28px}.socialHeader_linkIcon{width:100%;height:100%;fill:#2e353b}.siteBanner .container{height:100%;padding:12px}.siteBanner--large{width:100%;height:110vh}@media (min-width:600px){.siteBanner--large{height:100vh}}@media (min-width:768px){.siteBanner{margin-top:65px}.siteBanner .container{padding:0 12px}.siteBanner--large{height:500px}.siteBanner_flex{position:relative;height:100%;z-index:10}@supports (display:flex){.siteBanner_flex{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}}@supports not (display:flex){.siteBanner_flex{display:table;width:100%;height:100%}}}.siteSection{background:#fff;padding:30px 0}.siteSection_flexItem{margin-bottom:15px}@media (min-width:992px){.siteSection_flex{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.siteSection_flexItem{width:calc(50% - 12px)}}
  </style>";?>

  <!--================ - HEAD - ================-->
  <?php include_once($path."head.php"); ?>

  <body>

    <!--================ - NAV - ================-->
    <?php include_once($path."nav.php"); ?>


    <!-- ******************** SITE BANNER : Start ******************** /-->
    <section class="siteBanner  siteBanner--large">
      <!-- BEGIN : CONTAINER -->
      <div class="container">
        <!-- BEGIN : GRID GUIDES -->
        <div class="gridGuides">
          <div class="gridGuide"></div>
          <div class="gridGuide"></div>
          <div class="gridGuide"></div>
          <div class="gridGuide"></div>
        </div>
        <!-- END : GRID GUIDES /-->
        <!-- BEGIN : SITE BANNER FLEX -->
        <div class="siteBanner_flex">
          <div class="siteBanner_content">
            <h1 class="siteBanner_title">Hello! <br> My name is <br> Alex Clapperton</h1>
            <p class="siteBanner_text">
              I am a <b>Manchester</b> based Junior/Freelance <b>Front End Web Developer</b> and a final year University student.
            </p>
          </div>
        </div>
        <!-- END : SITE BANNER FLEX -->
      </div>
      <!-- END : CONTAINER -->
    </section>
    <!-- ******************** SITE BANNER : End /******************** /-->


    <!-- ******************** SITE SECTION : Start ******************** /-->
    <main class="siteSection" id="content" role="main">
      <!-- BEGIN : CONTAINER -->
      <div class="container">
        <!-- BEGIN : SITE SECTION FLEX -->
        <div class="siteSection_flex">
          <!-- BEGIN : SITE SECTION FLEX ITEM -->
          <div class="siteSection_flexItem">
            <h2>Who am I?</h2>
            <p>
              I have had a passion for Web Development since 2012 where I started my own little <b>Wordpress</b> site where I blogged about my love for <b>Apple</b> products. It was there I found an interest into how websites were made and decided to head to the <b><a href="#" title="External link to the Manchester Metropolitan University website.">Manchester Metropolitan University</a></b> to expand my knowledge of Web Development further.
            </p>
            <p>
              I thrive off learning new skills, being challenged daily and having to prove myself under pressure and being part of such young and dynamic industry is the perfect motivation for me to keep improving myself both professionally and personally.
            </p>
            <a class="btnLink  btnLink--pink  btnLink_flex" href="#">
              <span class="btnLink_text">Download My CV</span>
              <svg class="btnLink_icon  btnLink_icon--white">
                <title>Download icon</title>
                <use xlink:href="images/icons/sprite.svg#download" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
              </svg>
            </a>
          </div>
          <!-- END : SITE SECTION FLEX ITEM /-->
          <!-- BEGIN : SITE SECTION FLEX ITEM -->
          <div class="siteSection_flexItem">
            <h2>My future</h2>
            <p>
              Currently I work part-time as a Front End Developer for a small creative agency known as <b><a href="#" title="External link to the Nuttersons website.">Nuttersons</a></b>, based in Manchester. My main focus currently is to get the best degree possible at university and expanding on my level of skills. When I finally do graduate I will be heading down the path of Front End Development as this is the area I am most passionate about.
            </p>
            <p>
              Further down the line, I would like to be able to gain the courage to do a talk at a conference or meet up as I feel I will be giving something back to this great industry I am in. I would also like to be able to become a full-time freelance developer once I have gained enough experience within the industry.
            </p>
          </div>
          <!-- END : SITE SECTION FLEX ITEM /-->
        </div>
        <!-- END : SITE SECTION FLEX /-->
      </div>
      <!-- END : CONTAINER /-->
    </main>
    <!-- ******************** SITE SECTION : End /******************** /-->


    <!--================ - BLOG POSTS - ================-->
    <?php include_once($path."blog-posts.php"); ?>


    <!--================ - FOOTER - ================-->
    <?php include_once($path."footer.php"); ?>

  </body>
</html>
