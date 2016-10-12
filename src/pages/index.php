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

  <?php $critical_path = "<style>
.gridGuide,.gridGuides{position:absolute;height:100%}.btnLink,.btnLink_text{text-decoration:none}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}@keyframes fadein{from{opacity:0}to{opacity:1}}.gridGuides{top:0;left:0;width:100%;z-index:-1}@media (min-width:768px){.gridGuides::after,.gridGuides::before{content:'';position:absolute;top:0;width:1px;height:100%;background:#2e353b;opacity:.15}.gridGuides::before{left:-12px}.gridGuides::after{right:-12px}}.gridGuide{width:100%;min-height:auto;z-index:1}.gridGuide:nth-of-type(1)::after,.gridGuide:nth-of-type(1)::before{content:'';position:absolute;top:0;width:1px;height:100%;background:#2e353b;opacity:.15;z-index:-1}.gridGuide:nth-of-type(1)::before{left:12px}.gridGuide:nth-of-type(1)::after{right:12px}@media (min-width:768px){.gridGuide{width:25%}.gridGuide:nth-of-type(1){left:0}.gridGuide:nth-of-type(2){left:25%}.gridGuide:nth-of-type(3){left:50%}.gridGuide:nth-of-type(4){left:75%}.gridGuide::after,.gridGuide::before{content:'';position:absolute;top:0;width:1px;height:100%;background:#2e353b;opacity:.15;z-index:-1}.gridGuide::before{left:12px}.gridGuide::after{right:12px}}.container,.siteBanner,.siteSection{position:relative}.btnLink{display:inline-block;padding:8px 15px}.btnLink--pink{background:#ff486e;color:#fff}.btnLink_flex{-ms-flex-item-align:start;align-self:flex-start}.btnLink_icon{width:19px;height:19px;vertical-align:middle}.btnLink_icon--white{fill:#fff}*,:after,:before{box-sizing:border-box}html{font-size:16px}body{font-family:Inconsolata,sans-serif;font-size:14px;background:#e5e5e5;padding-bottom:55px;margin:0;-webkit-animation:fadein 2s;animation:fadein 2s}h1,h2{font-family:Dosis,sans-serif;font-weight:600;margin:0 0 12px;line-height:1.5;color:#ff486e}@media (min-width:600px){body{padding-bottom:0}}h1{font-size:2em}@media screen and (min-width:400px){h1{font-size:2.25em}}@media screen and (min-width:768px){h1{font-size:2.5em}}@media screen and (min-width:992px){h1{font-size:2.75em}}h2{font-size:1.5em}@media screen and (min-width:400px){h2{font-size:1.75em}}@media screen and (min-width:768px){h2{font-size:2em}}@media screen and (min-width:992px){h2{font-size:2.15em}}p{color:#2e353b;font-size:1em;font-weight:400;line-height:1.7;margin:0 0 15px}@media screen and (min-width:400px){p{font-size:1.07143em}}@media screen and (min-width:600px){p{font-size:1.10714em}}@media screen and (min-width:768px){p{font-size:1.14286em}}@media screen and (min-width:992px){p{font-size:1.17857em}}@media screen and (min-width:1230px){p{font-size:1.19643em}}a{color:#ff486e;text-decoration:underline}.container{padding:0 12px}@media (min-width:768px){.container{width:668px;margin:0 auto}.siteBanner{margin-top:65px}}@media (min-width:992px){.container{width:962px}}@media (min-width:1230px){.container{width:1200px}}.siteBanner{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.siteBanner .container{height:100%;padding:12px}.siteBanner--large{width:100%;height:110vh}.siteBanner_Title{font-size:2em}@media screen and (min-width:400px){.siteBanner_Title{font-size:2.25em}}@media screen and (min-width:768px){.siteBanner_Title{font-size:2.5em}}@media screen and (min-width:992px){.siteBanner_Title{font-size:2.75em}}@media (min-width:600px){.siteBanner--large{height:100vh}.siteBanner_Text{max-width:375px}}@media (min-width:768px){.siteBanner--large{height:500px}.siteBanner_flex{position:relative;height:100%;z-index:10;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.siteBanner_Text{align-self:flex-start}}.siteSection{background:#fff;padding:30px 0}.siteSection_flexItem{margin-bottom:15px}@media (min-width:992px){.siteSection_flex{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.siteSection_flexItem{width:calc(50% - 12px)}}
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
          <h1 class="siteBanner_Title">Hello! <br> My name is <br> Alex Clapperton</h1>
          <p class="siteBanner_Text">
            I am a <b>Manchester</b> based Junior/Freelance <b>Front End Web Developer</b> and a final year University student.
          </p>
        </div>
        <!-- END : SITE BANNER FLEX -->
      </div>
      <!-- END : CONTAINER -->
    </section>
    <!-- ******************** SITE BANNER : End /******************** /-->


    <!-- ******************** SITE SECTION : Start ******************** /-->
    <section class="siteSection" id="content">
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
    </section>
    <!-- ******************** SITE SECTION : End /******************** /-->


    <!--================ - BLOG POSTS - ================-->
    <?php include_once($path."blog-posts.php"); ?>


    <!--================ - FOOTER - ================-->
    <?php include_once($path."footer.php"); ?>

  </body>
</html>
