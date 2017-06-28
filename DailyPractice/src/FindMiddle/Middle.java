package FindMiddle;

import java.util.Scanner;

public class Middle {

		
		
		public static void main (String [] args){
			Scanner kb = new Scanner(System.in);
			
			System.out.println("Type in a word");
			
			String wordy = kb.nextLine();
			
			String firstWord = "";
			
			for(char c: wordy.toCharArray()){
				if(c==32){
					firstWord = "";
					for(char ch: wordy.toCharArray()){
						if(ch!=32){
							firstWord = firstWord+ch;
						}
						else{
							break;
						}
					}
					break;
				}
				else{
					firstWord = wordy;
				}
			}
			String middleChar = middle(firstWord);
			
			System.out.println(middleChar);
	
		}
		public static String middle (String words){
			int length = words.length();
			
			if(length % 2 == 0){
				int middle = length / 2;
				return (words.substring(middle -1, middle +1));
				
			}
			else{
				int middle = length / 2;
				return (words.substring(middle, middle +1));
			}
			
		}
		

}
