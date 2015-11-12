var process = require('child_process');
var fs = require('fs');
var dates = [
	/*'Sun Nov 30 10:00:00 2014  -0400',
	'Sun Dec 07 08:00:00 2014  -0400',
	'Sun Dec 14 10:00:00 2014  -0400',
	'Mon Dec 08 08:00:00 2014  -0400',
	'Tue Dec 09 10:00:00 2014  -0400',
	'Wed Dec 10 08:00:00 2014  -0400',
	'Thu Dec 11 10:00:00 2014  -0400',
	'Fri Dec 12 08:00:00 2014  -0400',
	'Sat Dec 13 10:00:00 2014  -0400',
	'Sat Dec 06 08:00:00 2014  -0400',
	'Sat Dec 20 10:00:00 2014  -0400'
	*/
	/*'Sat Mar 07 00:00:00 2015  -0400',
	'Fri Mar 13 00:00:00 2015  -0400',
	'Fri Feb 27 00:00:00 2015  -0400',
	'Thu Feb 19 00:00:00 2015  -0400',
	'Thu Mar 19 00:00:00 2015  -0400',
	'Wed Mar 25 00:00:00 2015  -0400',
	'Tue Mar 24 00:00:00 2015  -0400',
	'Wed Feb 11 00:00:00 2015  -0400',
	'Tue Feb 10 00:00:00 2015  -0400',
	'Mon Feb 16 00:00:00 2015  -0400',
	'Mon Feb 23 00:00:00 2015  -0400',
	'Tue Mar 03 00:00:00 2015  -0400',
	'Mon Mar 09 00:00:00 2015  -0400',
	'Mon Mar 16 00:00:00 2015  -0400'
	*/
	'Sun May 17 00:00:00 2015  -0400',
	'Mon May 18 00:00:00 2015  -0400',
	'Tue May 19 00:00:00 2015  -0400',
	'Wed May 20 00:00:00 2015  -0400',
	'Thu May 21 00:00:00 2015  -0400',
	'Fri May 29 00:00:00 2015  -0400',
	'Sat Jun 06 00:00:00 2015  -0400',
	'Fri Jun 12 00:00:00 2015  -0400',
	'Thu Jun 18 00:00:00 2015  -0400',
	'Wed Jun 17 00:00:00 2015  -0400',
	'Tue Jun 16 00:00:00 2015  -0400',
	'Mon Jun 15 00:00:00 2015  -0400',
	'Sun Jun 14 00:00:00 2015  -0400'
];

dates.forEach(function(date){
	
		setInterval(function(){
			fs.writeFileSync('realwork.txt',date);

			process.exec("git add realwork.txt");
			process.exec("GIT_AUTHOR_DATE='"+date+"' GIT_COMMITTER_DATE='"+date+"' git commit -m 'update'");

			process.exec("git push");
		},1000)
	
	
	
});


