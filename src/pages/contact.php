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
        <div class="siteBanner--flex">
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
        <div class="siteContact--flex">
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
                <input class="siteContact_input" type="text" id="name" name="name" required="">
                <label class="siteContact_label" for="name">Name *</label>
              </div>
              <!-- END : SITE CONTACT FIELD /-->
              <!-- BEGIN : SITE CONTACT FIELD -->
              <div class="siteContact_field">
                <input class="siteContact_input" type="text" id="email" name="email" required="">
                <label class="siteContact_label" for="email">Email *</label>
              </div>
              <!-- END : SITE CONTACT FIELD /-->
              <!-- BEGIN : SITE CONTACT FIELD -->
              <div class="siteContact_field">
                <textarea class="siteContact_textarea" id="message" name="message" rows="6" cols="50" required=""></textarea>
                <label class="siteContact_label" for="message">Message *</label>
              </div>
              <!-- END : SITE CONTACT FIELD /-->
              <!-- BEGIN : SITE CONTACT BTN -->
              <button class="siteContact_btn" type="submit" id="contact-button">
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
            <div class="siteContact_details  siteContact_details--flex">
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
            <div class="siteContact_details  siteContact_details--flex">
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
            <div class="siteContact_details  siteContact_details--flex">
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
            <div class="siteContact_details  siteContact_details--flex">
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
            <div class="siteContact_details  siteContact_details--flex">
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
