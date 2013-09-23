$(document).ready(function () {
    $('.navigation-bar').append('<!-- Navigation Bar Section: Begin --> \
		<div class="navbar navbar-inverse navbar-fixed-top">	<!-- navbar-inverse: color of bar; navbar-fixed-top: fix at top -->\
			<div class="container">								<!-- Sets the content in the center -->\
				<div class="navbar-header">\
					<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">	<!-- collapsable nav bar when screen in resized to something small -->\
						<span class="icon-bar"></span>			<!-- draw the bar -->\
						<span class="icon-bar"></span>			<!-- draw the bar -->\
						<span class="icon-bar"></span>			<!-- draw the bar -->\
					</button>\
					<a class="navbar-brand" href="index.html">FR</a>\
				</div> <!-- navbar-header -->\
				<div class="collapse navbar-collapse">\
                    <ul class="nav navbar-nav pull-left">\
                        <li><a href="#geinie">GENIE</a></li>\
                        <li><a href="#jira">JIRA</a></li>\
                        <li><a href="#paysquare">PaySquare</a></li>\
                    </ul>\
					<ul class="nav navbar-nav pull-right">\
                        <li class="dropdown">\
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Content <b class = "caret"></b></a>\
                            <ul class="dropdown-menu">\
                                <li><a href="DailyBuildEvals.html">Daily Build Evals</a></li>\
                                <li><a href="Kernels.html">Kernels</a></li>\
                                <li><a href="Books.html">Books</a></li>\
                                <li><a href="Softwares.html">Softwares</a></li>\
                                <li class="divider"></li>\
                                <li><a href="Eateries.html">Hungry Kya?</a></li>\
                            </ul>\
                        </li>\
						<li><a href="TeamMembers.html">Team Members</a></li>\
						<li><a href="About.html">About</a></li>\
					</ul>\
				</div>	<!-- nav-collapse -->\
			</div>	<!-- container -->\
		</div>	<!-- navbar -->\
		<!-- Navigation Bar Section: End -->')                  
});