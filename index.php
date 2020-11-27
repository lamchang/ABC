<!DOCTYPE html>
<html lang="es">
  <?php include "components/head.php"; ?>

  <body>
    <main role="main">
      <?php include "components/header.php"; ?>
      <?php include "components/hero.php"; ?>
      <?php include "components/how-does-it-work.php"; ?>
      <?php include "components/funding.php"; ?>
      <?php include "components/benefits.php"; ?>
      <?php include "components/map.php"; ?>
      <?php include "components/footer.php"; ?>
    </main>

    <!-- LIBRARIES -->
    <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAP1nIFzJrnbn3cbBvIxUCqqm6Zeh4gwqQ&libraries=&v=weekly" defer></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js" integrity="sha512-IQLehpLoVS4fNzl7IfH8Iowfm5+RiMGtHykgZJl9AWMgqx0AmJ6cRWcB+GaGVtIsnC4voMfm8f2vwtY+6oPjpQ==" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollTrigger.min.js" integrity="sha512-wK2NuxEyN/6s53M8G7c6cRUXvkeV8Uh5duYS06pAdLq4ukc72errSIyyGQGYtzWEzvVGzGSWg8l79e0VkTJYPw==" crossorigin="anonymous"></script>
    <script src="js/lib/anime.min.js"></script>
    <!-- SCRIPTS -->
    <script src="js/components/_header.js"></script>
    <script src="js/components/_hero.js"></script>
    <script src="js/components/_funding.js"></script>
    <script src="js/components/_how-does-it-work.js"></script>
    <script src="js/components/_map.js"></script>
    <script src="js/pages/_home.js"></script>
  </body>
</html>
