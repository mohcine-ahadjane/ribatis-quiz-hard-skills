import java.util.Collection;

public class Exercice {
    public int findLargest(int[] numbers) {
        if(numbers.length ==0 ){
            System.out.println("Pas d'élément dans le tableau numbers");
            return  -1;
        }
        int largest = numbers[0];
        for (int i=1; i<numbers.length;i++) {
            if (numbers[i] > largest) largest = numbers[i];
        }
        return largest;
    }

    public  void afficheList(int[] numbers, Collection<?> list) {
        for (int number : numbers)
            ((Collection<Integer>) list).add(number);
    }

    public void afficheList(Collection<?> list) {
        for (Object element : list)
            System.out.print(element + " ");
        System.out.println();
    }
    public void removeElementByValue(Collection<?> list, Object value) {
        //  Supprimer 1 ere occurence de l'élément
        for (Object element : list) {
            if (element.equals(value)) {
                list.remove(element);
                break;
            }
        }
    }
}
