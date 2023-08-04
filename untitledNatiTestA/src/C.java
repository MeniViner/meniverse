public class C extends B {
    int three;

    public C(int one, int two, int three) {
        super(one, two);
        this.three = three;
    }

    public void doStuff() {
        // דריסה חלקית של doStuff ממחלקה B
        return super.doStuff() + super.doStuff() + three;
    }
}