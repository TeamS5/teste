package Model;

import Base.FonctionBase;

import java.sql.Connection;
import java.util.Vector;

public class Statistique {
    String nom;
    double pourcentage;

    public Statistique(String nom, double pourcentage) {
        this.nom = nom;
        this.pourcentage = pourcentage;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public double getPourcentage() {
        return pourcentage;
    }

    public void setPourcentage(double pourcentage) {
        this.pourcentage = pourcentage;
    }

    public static Vector<Statistique>statistiqueCategorie(String sql) throws Exception {
        //String sql="select pourcentage,nomCategorie from statiqueCategorie";
        Vector<Statistique>valiny=new Vector<>();
        try(Connection connection=FonctionBase.connect()){
            Vector<Object>[]listeAll= FonctionBase.all(sql,connection);
        }
        return null;
    }

}
