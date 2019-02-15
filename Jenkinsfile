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

    //stage('NPM Install') {
    //    sh 'npm install'
    //}
   
    stage('NPM Install Karma') {
        sh 'npm install -g karma-cli'
    }
  
    stage ('Test'){
      milestone()
      sh 'ng test'
    } 

    stage('Build') {
        milestone()
        sh 'ng build'
    }
    
    stage('Archive') { 
      echo "Archive"
   } 
 
   stage('Deploy') { 
    milestone() 
    echo "Deploying..." 
  } 
}
