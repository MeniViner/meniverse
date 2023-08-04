public class B extends A {
    int two;

    public B(int one, int two) {
        super(one);
        this.two = two;
    }

    public void DoStuff(){
        return one + two;
    }

    public void DoStuff(int another){

        return one + one + another;
    }
}