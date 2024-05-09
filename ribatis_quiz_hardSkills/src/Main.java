import java.util.ArrayList;
import java.util.Collection;

public class Main {
    public static void main(String[] args) {

        Exercice exercice= new Exercice();
        int[] numbers = {3,19,5,11,-15,6,11,18};

        // Trouver le plus grand nombre dans numbers
        int largest = exercice.findLargest(numbers);
        System.out.println("Le plus grand nombre est : " + largest);


        Collection<Object> list = new ArrayList<>();
        list.add(123); // int
        list.add(3.14); // double
        list.add('a'); // char
        list.add("Quiz"); // string
        list.add(true); // boolean
        System.out.println("Avant L'ajout"); // Avant l'ajout
        exercice.afficheList(list);

        // Ajouter les nombres dans une liste de type collection
        exercice.afficheList(numbers, list);
        System.out.println("Après L'ajout");

        // Parcourir et afficher le contenu de la liste
        exercice.afficheList(list);

        // Supprimer un élément dans la liste recherchée par une valeur
        exercice.removeElementByValue(list, 11);
        System.out.println("Après suppression : ");
        exercice.afficheList(list);
    }
}