/*****   Daily Challenge: 99 Bottles Of Beer
 * 
 * @author : Magara Etchien N'gouan
 * 
 * Description :  
 *            
 * Date : 31 Decembre 2022
 * 
 * 
 * 
 * Instructions
Have you heard the infamous song “99 Bottles of Beer?”
In this exercise you need to console.log the lyrics of our own 99 Bottles of Beer song.
 * */


let usernumbersearch; //nombre saisir par l'utilisateur
let compteur=0;    //le compteur
let safenumber=0; //nombre restant a chaque tour de bouteilles


function Bottles(){

    //1.Prompt the user for a number to begin counting down bottles.
    usernumbersearch = prompt("Enter a number to begin counting down bottles");

    do {

        //2.In the song, everytime a bottle drops,the subtracted number should go up by 1
      compteur = compteur+1;
      safenumber = usernumbersearch - compteur;
      usernumbersearch =safenumber;

      console.log(" We start the song at " + usernumbersearch + " bottles ");
      console.log(" Take " + compteur + "down, pass it around " );
      console.log("we have now" + safenumber + "bottles");

      //3.. The song should end with “0 bottle of beer on the wall” or “no bottle of beer on the wall”.
      if (usernumbersearch == 0) {

        console.log("no bottle of beer on the wall");

      }
        
    } while (usernumbersearch>0);

}

Bottles();
    









 