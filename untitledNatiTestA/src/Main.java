Public class Main {

    static void main(String args[]) {

        A a1 = new A(1);
        B b1 = new B(1, 3);
        C c1 = new C(1, 3, 5);

        System.out.println(a1.doStuff());
        System.out.println(b1.doStuff());
        System.out.println(c1.doStuff());
        System.out.println(a1.doStuff(5));
        System.out.println(b1.doStuff(5));
        System.out.println(c1.doStuff(5));
    }
}