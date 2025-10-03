<!DOCTYPE html>

<html>

<head>

     <script type=''text/javascript''>

          var now = new Date();

          var hours = now.getHours();

          //1-8

          if (hours >= 1 && hours <= 8){

               document.write ('<body style=''background-color: orange''>');

          }

          //9-16

          else if (hours >= 9 && hours <= 16){

               document.write ('<body style=''background-color: skyblue''>');

          }

          //17-24

          else {

               document.write ('<body style=''background-color: white''>');

          }

     </script>

</head>

<body>

</body>

</html>

