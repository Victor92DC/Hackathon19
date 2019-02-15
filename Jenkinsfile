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
    sh 
      '''
      
      cd C:/jadd/jenkins-2.60.3/jobs/Hackaton/workspace/
      #Introducimos los nombres del directorio en Array
      for i in $(/bin/ls -ad *); 
      do
        #Cogemos el nombre de la carpeta
        echo $(basename $i)
        #Comprimimos 
        echo "\n Comprimiento $(basename $i)"
        /bin/tar -cvf $(basename $i).tar.gz $(basename $i)
        #Borramos las carpetas
        rm -r $(basename $i)
        rm -r $(basename $i).tar.gz
      done
      
      '''
  } 
 
  stage('Deploy') { 
    milestone() 
    echo "Deploying..." 
  } 
}
