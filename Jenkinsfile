#!groovy

properties(
    [
        [$class: 'BuildDiscarderProperty', strategy:
          [$class: 'LogRotator', artifactDaysToKeepStr: '14', artifactNumToKeepStr: '5', daysToKeepStr: '30', numToKeepStr: '60']],
        pipelineTriggers(
          [
              pollSCM('H/15 * * * *'),
              cron('@daily'),
          ]
        )
    ]
)
node {
    
     stage('Checkout') {
        //disable to recycle workspace data to save time/bandwidth
        //deleteDir()
        checkout scm
    }

    stage('NPM Install') {
        milestone()
        sh 'npm install'
    }
   
    //stage('NPM Install plugin') {
    //    sh 'npm install karma-jasmine karma-chrome-launcher jasmine-core --save-dev'
    //}
  
    stage ('Test'){
      milestone()
      //sh 'ng test & sleep 10; kill $!'
      //sh 'ng test --single-run' 
    }
  
    stage ('Code Quality'){
      milestone()
      sh 'ng lint'
    }

    stage('Build') {
        milestone()
        sh 'ng build'
    }
    
    stage('Archive') { 
      echo "Archive..."
      //sh 'tar -cvzf dist.tar.gz --strip-components=1 dist' 
      //archive 'dist.tar.gz' 

   } 
 
   stage('Deploy') { 
    milestone() 
    echo "Deploying..." 
  } 
}
