<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
  <head>
    <title>Code Showcase &mdash; Joseph Method</title>
    <meta name="author" content="Joseph Method"/>
    <meta name="date" content="2008-05-05T20:06:47-0400"/>
    <meta name="copyright" content=""/>
    <meta name="keywords" content=""/>
    <meta name="description" content=""/>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
    <meta http-equiv="content-type" content="application/xhtml+xml; charset=UTF-8"/>
    <meta http-equiv="content-style-type" content="text/css"/>

    <!-- Scriptaculous includes -->

<script src="/javascripts/prototype.js" type="text/javascript"></script>
<script src="/javascripts/scriptaculous.js?load=effects,builder" type="text/javascript"></script>

<!-- Lightbox 2 includes -->
<script type="text/javascript" src="/javascripts/lightbox.js"></script>
<link rel="stylesheet" href="css/lightbox.css" type="text/css" media="screen" />
<script type="text/javascript" src="/javascripts/showcase.js"></script>
<link rel="stylesheet" href="css/showcase.css" type="text/css" media="screen" />
</head>
<body>

<div id="frame">

<div id="compliance-badge">
<a href="http://validator.w3.org/check?uri=referer"><img
src="http://www.w3.org/Icons/valid-xhtml10-blue"
alt="Valid XHTML 1.0 Transitional" height="31" width="88" /></a>
</div>

<h3>Code Showcase &mdash; Joseph Method (<small>updated 5/11/08</small>)</h3>

<?
echo FALSE
?>

<?
/* For seeing the supervariables 
$string = '';
foreach($_GET as $key => $value){
  $string .= "${key} => ${value},";
}
if($string != ''){
  echo $string;
} else {
  echo "Wrong array?";
} */
?>

<? 
function decideToCapitalize($name){
  $capital_array = array("html", "php");
  if(array_search($name, $capital_array) !== FALSE)
  {
    $capitalName = strtoupper($name);
  } else 
  {
    $capitalName = ucwords($name);
  }
  return $capitalName;
}

function write_checkbox($name){
  $value = '';
  if($_GET[$name] == 'on'){
    $value = 'checked="checked"';
  }

  if(empty($_GET)){
    $value = 'checked="checked"';
  }

  $capitalName = decideToCapitalize($name);
  return "<tr><td>${capitalName} :</td> <td><input type='checkbox' name='${name}' ${value} /></td></tr>";
}
?>

<div id="controls">

  <div id="description">

I am a programmer who specializes in <a href="http://ruby-lang.org">Ruby</a>, 
<a href="http://rubyonrails.org">Ruby on Rails</a> and web development in 
general. Other areas that I have experience in are desktop GUI development and 
small-office automation.This page is meant to showcase some of my recent 
programming work and skills.

<p>I can be contacted at <a href="mailto:tristil+jobs@gmail.com">tristil@gmail.com</a></p>
</div>

  <div id="view_options_form">
  <div id="options_header">Topics</div>
  <form name="view_options" action="/index.php">
  <table>

<? 
$string = '';
$array = array("ruby", "python","javascript","php", "html", "admin");
foreach($array as $name ){
  $string .= write_checkbox($name);
}
echo $string;
?>


<tr>
  <td><input type="submit" value="Only show me these" /></td>
  </tr>
  </table>
  </form>
  </div>
  </div> <!-- end controls -->

<? 
foreach($_GET as $key => $value){
  require ("sections/${key}.php");
}
if(empty($_GET)){
  foreach($array as $key){
    require ("sections/${key}.php");
  }
}
?>

  </div> <!-- frame div -->
  </body>
  </html>
