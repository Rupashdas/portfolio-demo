<?php 
foreach(glob("*.png") as $css){
	echo "<li data-name=\"{$css}\" data-cid=\"c32\">
			<img src=\"assets/img/country-flags/{$css}\" alt=\"{$css}\">
		  {$css}</li> \n";
	echo "";
}