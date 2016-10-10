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
