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

  <?php $critical_path = "";?>

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
