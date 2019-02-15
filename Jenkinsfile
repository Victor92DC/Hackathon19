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

    //stage('Build') {
    //    milestone()
    //    sh 'ng build'
    //}
    
    stage('Archive') { 
    sh 'tar -cvzf dist.tar.gz' 
    //archive 'dist.tar.gz' 
  } 
 
  stage('Deploy') { 
    milestone() 
    echo "Deploying..." 
  } 
}
