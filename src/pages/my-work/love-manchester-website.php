<?php
  $path = $_SERVER['DOCUMENT_ROOT'];
  $path .= "/includes/";
  $current = 'work';
?>

<!DOCTYPE html>
<html lang="en">

  <!-- META TAGS  -->
  <?php $meta_description = '';?>
  <?php $meta_keywords = '';?>

  <!-- PAGE TITLE -->
  <?php $page_title = "Portfolio Item | Alex Clapperton";?>

  <!-- CRITICAL CSS -->
  <?php $critical_path = "<style>
.gridGuide,.gridGuides{position:absolute;height:100%}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}@keyframes fadein{from{opacity:0}to{opacity:1}}.gridGuides{top:0;left:0;width:100%;z-index:-1}@media (min-width:768px){.gridGuides::after,.gridGuides::before{content:'';position:absolute;top:0;width:1px;height:100%;background:#2e353b;opacity:.15}.gridGuides::before{left:-12px}.gridGuides::after{right:-12px}}.gridGuide{width:100%;min-height:auto;z-index:1}.gridGuide:nth-of-type(1)::after,.gridGuide:nth-of-type(1)::before{content:'';position:absolute;top:0;width:1px;height:100%;background:#2e353b;opacity:.15;z-index:-1}.gridGuide:nth-of-type(1)::before{left:12px}.gridGuide:nth-of-type(1)::after{right:12px}@media (min-width:768px){.gridGuide{width:25%}.gridGuide:nth-of-type(1){left:0}.gridGuide:nth-of-type(2){left:25%}.gridGuide:nth-of-type(3){left:50%}.gridGuide:nth-of-type(4){left:75%}.gridGuide::after,.gridGuide::before{content:'';position:absolute;top:0;width:1px;height:100%;background:#2e353b;opacity:.15;z-index:-1}.gridGuide::before{left:12px}.gridGuide::after{right:12px}}*,:after,:before{box-sizing:border-box}html{font-size:16px}body{font-family:Inconsolata,sans-serif;font-size:14px;background:#e5e5e5;padding-bottom:55px;margin:0;-webkit-animation:fadein 2s;animation:fadein 2s}@media (min-width:600px){body{padding-bottom:0}}h1{color:#ff486e;font-family:Dosis,sans-serif;font-size:2em;font-weight:600;margin:0 0 12px;line-height:1.5}@media screen and (min-width:400px){h1{font-size:2.25em}}@media screen and (min-width:768px){h1{font-size:2.5em}}@media screen and (min-width:992px){h1{font-size:2.75em}}img{max-width:100%;margin:0 auto;vertical-align:middle}.container{position:relative;padding:0 12px}@media (min-width:768px){.container{width:668px;margin:0 auto}.siteBanner{margin-top:65px}}@media (min-width:992px){.container{width:962px}}@media (min-width:1230px){.container{width:1200px}}.siteBanner{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.siteBanner .container{height:100%;padding:12px}.siteBanner_work .container{background:url(/images/banner/browser-frame.png) bottom no-repeat;background-size:calc(100% - 24px)}.siteBanner--small{width:100%;height:400px}@media (min-width:400px){.siteBanner--small{height:550px}}@media (min-width:600px){.siteBanner--small{height:650px}}@media (min-width:768px){.siteBanner_work .container{background-position:calc(100% - 12px) bottom;background-size:calc(50% - 24px)}.siteBanner--small{height:400px}}@media (min-width:1230px){.siteBanner--small{height:550px}}.siteBanner_Title{font-size:2em}@media screen and (min-width:400px){.siteBanner_Title{font-size:2.25em}}@media screen and (min-width:768px){.siteBanner_Title{font-size:2.5em}}@media screen and (min-width:992px){.siteBanner_Title{font-size:2.75em}}.sitePortfolio{background:#fff;padding:30px 0}.sitePortfolio_img{margin-bottom:24px}@media (min-width:768px){.siteBanner--flex{position:relative;height:100%;z-index:10;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.sitePortfolio--flex{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.sitePortfolio_flexItem{width:calc(50% - 12px)}.sitePortfolio_img:last-child{margin-bottom:0}}
</style>";?>

  <!--================ - HEAD - ================-->
  <?php include_once($path."head.php"); ?>

  <body>

    <!--================ - NAV - ================-->
    <?php include_once($path."nav.php"); ?>


    <!-- ******************** SITE BANNER : Start ********************-->
    <section class="siteBanner  siteBanner--small  siteBanner_work">
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
        <div class="siteBanner--flex">
          <h1 class="siteBanner_Title">Check out <br> my latest work</h1>

          <!--================ - BREADCRUMBS - ================-->
          <?php include_once($path."breadcrumbs.php"); ?>

        </div>
        <!-- END : SITE BANNER FLEX -->
      </div>
      <!-- END : CONTAINER -->
    </section>
    <!-- ******************** SITE BANNER : End ******************** /-->


    <!-- ******************** SITE PORTFOLIO : Start ********************-->
    <section class="sitePortfolio" id="content">
      <!-- BEGIN : CONTAINER -->
      <div class="container">
        <div class="sitePortfolio--flex">
          <div class="sitePortfolio_flexItem">
            <img class="sitePortfolio_img" src="/images/portfolio/portfolio-item.jpg" alt="" />
            <img class="sitePortfolio_img" src="/images/portfolio/portfolio-item2.jpg" alt="" />
          </div>
          <div class="sitePortfolio_flexItem">
            <h2>Lorem Ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Demo Suespendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
            </p>
            <p>
              Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim molid pellentesque felis.
            </p>

            <hr>

            <ul class="sitePortfolio_list">
              <li class="sitePortfolio_listItem"><b>Project Name:</b> Love Manchester Website</li>
              <li class="sitePortfolio_listItem"><b>Category:</b> University Project</li>
              <li class="sitePortfolio_listItem"><b>Date:</b> 24/03/2016</li>
            </ul>

            <hr>

            <h3>Share this page</h3>

            <!-- AddToAny BEGIN -->
            <div class="sitePortfolio_share a2a_kit a2a_kit_size_32 a2a_default_style">
              <a class="sitePortfolio_shareItem a2a_button_facebook"></a>
              <a class="sitePortfolio_shareItem a2a_button_twitter"></a>
              <a class="sitePortfolio_shareItem a2a_button_linkedin"></a>
              <a class="sitePortfolio_shareItem a2a_button_google_plus"></a>
            </div>
            <script async src="https://static.addtoany.com/menu/page.js"></script>
            <!-- AddToAny END -->
          </div>
        </div>
      </div>
      <!-- END : CONTAINER /-->
    </section>
    <!-- ******************** SITE PORTFOLIO : End ******************** /-->


    <section class="sitePortfolio_cta">
      <div class="container">
        <!-- BEGIN : GRID GUIDES -->
        <div class="gridGuides">
          <div class="gridGuide"></div>
          <div class="gridGuide"></div>
          <div class="gridGuide"></div>
          <div class="gridGuide"></div>
        </div>
        <!-- END : GRID GUIDES /-->

        <div class="sitePortfolio_cta--flex">
          <a class="sitePortfolio_ctaLink  sitePortfolio_ctaLink--disabled  sitePortfolio_ctaLink--left" href="#">
            <svg class="sitePortfolio_ctaIcon  sitePortfolio_ctaIcon--left">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/images/icons/sprite.svg#arrow-right"></use>
            </svg>
            <span class="sitePortfolio_ctaText">Prev Project</span>
          </a>

          <a class="sitePortfolio_ctaLink  sitePortfolio_ctaLink--right" href="#">
            <span class="sitePortfolio_ctaText">Next Project</span>
            <svg class="sitePortfolio_ctaIcon">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/images/icons/sprite.svg#arrow-right"></use>
            </svg>
          </a>
        </div>
      </div>
    </section>


    <!--================ - FOOTER - ================-->
    <?php include_once($path."footer.php"); ?>

  </body>
</html>
