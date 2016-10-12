<?php
  $path = $_SERVER['DOCUMENT_ROOT'];
  $path .= "/includes/";
  $current = 'contact';
?>

<!DOCTYPE html>
<html lang="en">

  <!-- META TAGS  -->
  <?php $meta_description = '';?>
  <?php $meta_keywords = '';?>

  <!-- PAGE TITLE -->
  <?php $page_title = "Contact | Alex Clapperton";?>

  <!-- CRITICAL CSS -->
  <?php $critical_path = "<style>
.gridGuide,.gridGuides{position:absolute;height:100%}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}@keyframes fadein{from{opacity:0}to{opacity:1}}.gridGuides{top:0;left:0;width:100%;z-index:-1}@media (min-width:768px){.gridGuides::after,.gridGuides::before{content:'';position:absolute;top:0;width:1px;height:100%;background:#2e353b;opacity:.15}.gridGuides::before{left:-12px}.gridGuides::after{right:-12px}}.gridGuide{width:100%;min-height:auto;z-index:1}.gridGuide:nth-of-type(1)::after,.gridGuide:nth-of-type(1)::before{content:'';position:absolute;top:0;width:1px;height:100%;background:#2e353b;opacity:.15;z-index:-1}.gridGuide:nth-of-type(1)::before{left:12px}.gridGuide:nth-of-type(1)::after{right:12px}@media (min-width:768px){.gridGuide{width:25%}.gridGuide:nth-of-type(1){left:0}.gridGuide:nth-of-type(2){left:25%}.gridGuide:nth-of-type(3){left:50%}.gridGuide:nth-of-type(4){left:75%}.gridGuide::after,.gridGuide::before{content:'';position:absolute;top:0;width:1px;height:100%;background:#2e353b;opacity:.15;z-index:-1}.gridGuide::before{left:12px}.gridGuide::after{right:12px}}*,:after,:before{box-sizing:border-box}html{font-size:16px}body{font-family:Inconsolata,sans-serif;font-size:14px;background:#e5e5e5;padding-bottom:55px;margin:0;-webkit-animation:fadein 2s;animation:fadein 2s}h1,h2{color:#ff486e;font-family:Dosis,sans-serif;font-weight:600;margin:0 0 12px;line-height:1.5}@media (min-width:600px){body{padding-bottom:0}}h1{font-size:2em}@media screen and (min-width:400px){h1{font-size:2.25em}}@media screen and (min-width:768px){h1{font-size:2.5em}}@media screen and (min-width:992px){h1{font-size:2.75em}}h2{font-size:1.5em}@media screen and (min-width:400px){h2{font-size:1.75em}}@media screen and (min-width:768px){h2{font-size:2em}}@media screen and (min-width:992px){h2{font-size:2.15em}}p{color:#2e353b;font-size:1em;font-weight:400;line-height:1.7;margin:0 0 15px}@media screen and (min-width:400px){p{font-size:1.07143em}}@media screen and (min-width:600px){p{font-size:1.10714em}}@media screen and (min-width:768px){p{font-size:1.14286em}}@media screen and (min-width:992px){p{font-size:1.17857em}}@media screen and (min-width:1230px){p{font-size:1.19643em}}button{-webkit-appearance:none;appearance:none;border:none}.container{position:relative;padding:0 12px}@media (min-width:768px){.container{width:668px;margin:0 auto}.siteBanner{margin-top:65px}}@media (min-width:992px){.container{width:962px}}@media (min-width:1230px){.container{width:1200px}}.siteBanner{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.siteBanner .container{height:100%;padding:12px}.siteBanner_contact .container{background:url(/images/banner/contact-frame.png) bottom no-repeat;background-size:calc(100% - 24px)}.siteBanner--small{width:100%;height:400px}@media (min-width:400px){.siteBanner--small{height:550px}}@media (min-width:600px){.siteBanner--small{height:650px}}@media (min-width:768px){.siteBanner_contact .container{background-position:calc(100% - 12px) bottom;background-size:calc(50% - 24px)}.siteBanner--small{height:400px}}@media (min-width:1230px){.siteBanner--small{height:550px}}.siteBanner_Title{font-size:2em}@media screen and (min-width:400px){.siteBanner_Title{font-size:2.25em}}@media screen and (min-width:768px){.siteBanner_Title{font-size:2.5em}}@media screen and (min-width:992px){.siteBanner_Title{font-size:2.75em}}.siteContact{background:#fff;padding:30px 0}.siteContact_flexItem{margin-bottom:24px}@media (min-width:768px){.siteBanner_flex{position:relative;height:100%;z-index:10;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.siteContact_flex{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.siteContact_flexItem{width:calc(50% - 12px);margin-bottom:0}}.siteContact_input,.siteContact_textarea{width:100%;background:#e5e5e5;color:#2e353b;border:none}.siteContact_field{position:relative;margin-top:25px}@media (min-width:768px){.siteContact_field{margin-top:36px}}.siteContact_input{font-family:Inconsolata,sans-serif;font-size:14px;padding:8px 12px}.siteContact_label{position:absolute;top:8px;left:12px;font-family:Dosis,sans-serif;font-weight:600}.siteContact_btn,.siteContact_textarea{font-family:Inconsolata,sans-serif;font-size:14px}@media (min-width:992px){.siteContact_input{padding:12px}.siteContact_label{top:12px}}.siteContact_textarea{padding:8px 12px}.siteContact_btn{background:#ff486e;color:#fff;padding:8px 15px;margin-top:25px}.siteContact_btnText{display:inline-block;vertical-align:middle}.siteContact_btnIcon{width:19px;height:19px;fill:#fff;vertical-align:middle}.siteContact_loading{font-weight:700}.siteContact_loading--displayNone{display:none}
</style>";?>

  <!--================ - HEAD - ================-->
  <?php include_once($path."head.php"); ?>

  <body>

    <!--================ - NAV - ================-->
    <?php include_once($path."nav.php"); ?>


    <!-- ******************** SITE BANNER : Start ********************-->
    <section class="siteBanner  siteBanner--small  siteBanner_contact">
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
          <h1 class="siteBanner_Title">Got a question? <br> Get in touch</h1>

          <!--================ - BREADCRUMBS - ================-->
          <?php include_once($path."breadcrumbs.php"); ?>

        </div>
        <!-- END : SITE BANNER FLEX -->
      </div>
      <!-- END : CONTAINER -->
    </section>
    <!-- ******************** SITE BANNER : End ******************** /-->


    <!-- ******************** SITE CONTACT : Start ******************** -->
    <section class="siteContact">
      <!-- BEGIN : CONTAINER -->
      <div class="container">
        <!-- BEGIN : SITE CONTACT FLEX -->
        <div class="siteContact_flex">
          <!-- BEGIN : SITE CONTACT FLEX ITEM -->
          <div class="siteContact_flexItem">
            <h2 class="siteContact_title">Ye olde form...</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <!-- BEGIN : SITE CONTACT FORM -->
            <form class="siteContact_form" action="javascript:void(0)" method="post">
              <!-- BEGIN : SITE CONTACT FIELD -->
              <div class="siteContact_field">
                <input class="siteContact_input" type="text" name="name" required="">
                <label class="siteContact_label" for="name">Name *</label>
              </div>
              <!-- END : SITE CONTACT FIELD /-->
              <!-- BEGIN : SITE CONTACT FIELD -->
              <div class="siteContact_field">
                <input class="siteContact_input" type="text" name="email" required="">
                <label class="siteContact_label" for="email">Email *</label>
              </div>
              <!-- END : SITE CONTACT FIELD /-->
              <!-- BEGIN : SITE CONTACT FIELD -->
              <div class="siteContact_field">
                <textarea class="siteContact_textarea" name="message" rows="6" cols="50" required=""></textarea>
                <label class="siteContact_label" for="message">Message *</label>
              </div>
              <!-- END : SITE CONTACT FIELD /-->
              <!-- BEGIN : SITE CONTACT BTN -->
              <button class="siteContact_btn" type="submit">
                <span class="siteContact_btnText">Ship Ahoy!</span>
                <svg class="siteContact_btnIcon">
                  <title>Front facing ship icon</title>
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="images/icons/sprite.svg#ship"></use>
                </svg>
              </button>
              <!-- END : SITE CONTACT BTN /-->
              <span class="siteContact_loading  siteContact_loading--displayNone">Loading...</span>
              <div class="siteContact_message"></div>
            </form>
            <!-- END : SITE CONTACT FORM /-->
          </div>
          <!-- END : SITE CONTACT FLEX ITEM /-->
          <!-- BEGIN : SITE CONTACT FLEX ITEM -->
          <div class="siteContact_flexItem">
            <h2>Don't fancy the form?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <!-- BEGIN : SITE CONTACT DETAILS -->
            <div class="siteContact_details  siteContact_details_flex">
              <!-- BEGIN : SITE CONTACT DETAILS ICON WRAPPER -->
              <div class="siteContact_detailsIconWrapper">
                <svg class="siteContact_detailsIcon">
                  <title>Home icon</title>
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="images/icons/sprite.svg#mobile"></use>
                </svg>
              </div>
              <!-- END : SITE CONTACT DETAILS ICON WRAPPER /-->
              <span class="siteContact_detailsText">+44 7930 946 211</span>
            </div>
            <!-- END : SITE CONTACT DETAILS -->
            <!-- BEGIN : SITE CONTACT DETAILS -->
            <div class="siteContact_details  siteContact_details_flex">
              <!-- BEGIN : SITE CONTACT DETAILS ICON WRAPPER -->
              <div class="siteContact_detailsIconWrapper">
                <svg class="siteContact_detailsIcon">
                  <title>Mail icon</title>
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="images/icons/sprite.svg#mail"></use>
                </svg>
              </div>
              <!-- END : SITE CONTACT DETAILS ICON WRAPPER /-->
              <a class="siteContact_detailsText" href="mailto:alex@alexclapperton.co.uk">alex@alexclapperton.co.uk</a>
            </div>
            <!-- END : SITE CONTACT DETAILS /-->
            <!-- BEGIN : SITE CONTACT DETAILS -->
            <div class="siteContact_details  siteContact_details_flex">
              <!-- BEGIN : SITE CONTACT DETAILS ICON WRAPPER -->
              <div class="siteContact_detailsIconWrapper">
                <svg class="siteContact_detailsIcon">
                  <title>Facebook icon</title>
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="images/icons/sprite.svg#facebook"></use>
                </svg>
              </div>
              <!-- END : SITE CONTACT DETAILS ICON WRAPPER /-->
              <a class="siteContact_detailsText" href="https://www.facebook.com/AlexMClapperton" title="External link to Alex's Facebook profile.">AlexMClapperton</a>
            </div>
            <!-- END : SITE CONTACT DETAILS /-->
            <!-- BEGIN : SITE CONTACT DETAILS -->
            <div class="siteContact_details  siteContact_details_flex">
              <!-- BEGIN : SITE CONTACT DETAILS ICON WRAPPER -->
              <div class="siteContact_detailsIconWrapper">
                <svg class="siteContact_detailsIcon">
                  <title>Twitter icon</title>
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="images/icons/sprite.svg#twitter"></use>
                </svg>
              </div>
              <!-- END : SITE CONTACT DETAILS ICON WRAPPER -->
              <a class="siteContact_detailsText" href="https://twitter.com/AlexMClapperton" title="External link to Alex's Twitter profile.">@AlexMClapperton</a>
            </div>
            <!-- END : SITE CONTACT DETAILS /-->
            <!-- BEGIN : SITE CONTACT DETAILS -->
            <div class="siteContact_details  siteContact_details_flex">
              <!-- BEGIN : SITE CONTACT DETAILS ICON WRAPPER -->
              <div class="siteContact_detailsIconWrapper">
                <svg class="siteContact_detailsIcon">
                  <title>LinkedIn icon</title>
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="images/icons/sprite.svg#linkedin"></use>
                </svg>
              </div>
              <!-- END : SITE CONTACT DETAILS ICON WRAPPER /-->
              <a class="siteContact_detailsText" href="https://uk.linkedin.com/in/alexclapperton" title="External link to Alex's LinkedIn profile.">AlexClapperton</a>
            </div>
            <!-- END : SITE CONTACT DETAILS /-->
          </div>
          <!-- END : SITE CONTACT FLEX ITEM /-->
        </div>
        <!-- END : SITE CONTACT FLEX /-->
      </div>
      <!-- END : CONTAINER /-->
    </section>
    <!-- ******************** SITE CONTACT : End ******************** /-->


    <!--================ - BLOG POSTS - ================-->
    <?php include_once($path."blog-posts.php"); ?>


    <!--================ - FOOTER - ================-->
    <?php include_once($path."footer.php"); ?>

  </body>
</html>
