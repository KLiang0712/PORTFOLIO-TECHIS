/* amCharts */
am4core.useTheme(am4themes_animated);
var chart = am4core.create("cloud2", am4plugins_wordCloud.WordCloud);
var series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());

series.text = "KoryLiang is a ComputerScience DoubleMajor 2016 & journey using Python joining TECHIS for WebDevelopment. CDNs studies built in 2019 while a ComputerScience student. DataScience & WebDevelopment for a ComputerScience DoubleMajor to KoryLiang enjoys building shop businesses plus his own personal website. ComputerScience DoubleMajor KoryLiang studies WebDevelopment FrontEnd HTML5 & CSS3 plus BackEnd JavaScript, Python & CDNs. WebDevelopment studies by KoryLiang are by TECHIS in 2022. By TECHIS ComputerScience DoubleMajor KoryLiang studies WebDevelopment CDNs, DataScience, Python, & ArtificialIntelligence. ComputerScience DoubleMajor KoryLiang studies WebDevelopment & DataScience. DataScience DoubleMajor KoryLiang studies CDNs, ArtificialIntelligence & DataScience using languages like Python. ComputerScience DoubleMajor KoryLiang primarily programs in Python. WebDevelopment DoubleMajor KoryLiang studies FrontEnd & BackEnd using FrontEnd HTML5 & CSS3 & BackEnd JavaScript. KoryLiang does WebDevelopment FrontEnd using HTML5 & CSS3 plus JavaScript BackEnd. TECHIS ComputerScience DoubleMajor for KoryLiang uses CDNs, Python, FrontEnd with HTML5 & CSS3 plus JavaScript BackEnd using WebDevelopment languages. ComputerScience DoubleMajor KoryLiang summarizes ComputerScience courses enjoying teaching Python basics, ArtificialIntelligence, DataScience, & WebDevelopment. KoryLiang enjoys teaching WebDevelopment pairing CDNs, HTML5 & CSS3 with JavaScript. ArtificialIntelligence projects by KoryLiang use Python, DataScience, & CDNs. ArtificialIntelligence WebDevelopment plus Python equals HTML5 built FrontEnd CSS3 & BackEnd JavaScript CDNs.";

/* zingChart */
var myConfig = {
  type: 'wordcloud',
  options: {
    text: 'KoryLiang is a ComputerScience DoubleMajor 2016 & journey using Python joining TECHIS for WebDevelopment. CDNs studies built in 2019 while a ComputerScience student. DataScience & WebDevelopment for a ComputerScience DoubleMajor to KoryLiang enjoys building shop businesses plus his own personal website. ComputerScience DoubleMajor KoryLiang studies WebDevelopment FrontEnd HTML5 & CSS3 plus BackEnd JavaScript, Python & CDNs. WebDevelopment studies by KoryLiang are by TECHIS in 2022. By TECHIS ComputerScience DoubleMajor KoryLiang studies WebDevelopment CDNs, DataScience, Python, & ArtificialIntelligence. ComputerScience DoubleMajor KoryLiang studies WebDevelopment & DataScience. DataScience DoubleMajor KoryLiang studies CDNs, ArtificialIntelligence & DataScience using languages like Python. ComputerScience DoubleMajor KoryLiang primarily programs in Python. WebDevelopment DoubleMajor KoryLiang studies FrontEnd & BackEnd using FrontEnd HTML5 & CSS3 & BackEnd JavaScript. KoryLiang does WebDevelopment FrontEnd using HTML5 & CSS3 plus JavaScript BackEnd. TECHIS ComputerScience DoubleMajor for KoryLiang uses CDNs, Python, FrontEnd with HTML5 & CSS3 plus JavaScript BackEnd using WebDevelopment languages. ComputerScience DoubleMajor KoryLiang summarizes ComputerScience courses enjoying teaching Python basics, ArtificialIntelligence, DataScience, & WebDevelopment. KoryLiang enjoys teaching WebDevelopment pairing CDNs, HTML5 & CSS3 with JavaScript. ArtificialIntelligence projects by KoryLiang use Python, DataScience, & CDNs. ArtificialIntelligence WebDevelopment plus Python equals HTML5 built FrontEnd CSS3 & BackEnd JavaScript CDNs.',

    minLength: 4,
    ignore: ['establish','this'],
    maxItems: 50,
    aspect: 'spiral',
    rotate: true,

    colorType: 'palette',
    palette: ['#16BBCE', '#006400', '#FF0000'],

    style: {
      fontFamily: 'Arial',

      hoverState: {
        backgroundColor: '#EBF9F8',
        borderColor: 'none',
        borderRadius: 3,
        fontColor: 'black'
      },
      tooltip: {
        text: 'KoryLiang is a ComputerScience DoubleMajor 2016 & journey using Python joining TECHIS for WebDevelopment. CDNs studies built in 2019 while a ComputerScience student. DataScience & WebDevelopment for a ComputerScience DoubleMajor to KoryLiang enjoys building shop businesses plus his own personal website. ComputerScience DoubleMajor KoryLiang studies WebDevelopment FrontEnd HTML5 & CSS3 plus BackEnd JavaScript, Python & CDNs. WebDevelopment studies by KoryLiang are by TECHIS in 2022. By TECHIS ComputerScience DoubleMajor KoryLiang studies WebDevelopment CDNs, DataScience, Python, & ArtificialIntelligence. ComputerScience DoubleMajor KoryLiang studies WebDevelopment & DataScience. DataScience DoubleMajor KoryLiang studies CDNs, ArtificialIntelligence & DataScience using languages like Python. ComputerScience DoubleMajor KoryLiang primarily programs in Python. WebDevelopment DoubleMajor KoryLiang studies FrontEnd & BackEnd using FrontEnd HTML5 & CSS3 & BackEnd JavaScript. KoryLiang does WebDevelopment FrontEnd using HTML5 & CSS3 plus JavaScript BackEnd. TECHIS ComputerScience DoubleMajor for KoryLiang uses CDNs, Python, FrontEnd with HTML5 & CSS3 plus JavaScript BackEnd using WebDevelopment languages. ComputerScience DoubleMajor KoryLiang summarizes ComputerScience courses enjoying teaching Python basics, ArtificialIntelligence, DataScience, & WebDevelopment. KoryLiang enjoys teaching WebDevelopment pairing CDNs, HTML5 & CSS3 with JavaScript. ArtificialIntelligence projects by KoryLiang use Python, DataScience, & CDNs. ArtificialIntelligence WebDevelopment plus Python equals HTML5 built FrontEnd CSS3 & BackEnd JavaScript CDNs.',
        visible: true,

        alpha: 0.9,
        backgroundColor: '#EBF9f8',
        borderColor: 'none',
        borderRadius: 3,
        fontColor: 'black',
        fontFamily: 'Arial', 
        padding: 5,
        textAlpha: 1,
        width: 400,
        wrapText: true
      }
    }
  }
};

zingchart.render({ 
  id: 'cloud1', 
  data: myConfig, 
  height: '100%', 
  width: '100%' 
});


