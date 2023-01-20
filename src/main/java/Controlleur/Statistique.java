package Controlleur;

import Model.Enchere;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;

@WebServlet(name = "Statistique", value = "/Statistique")
public class Statistique extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String durre=request.getParameter("value");
        double d=Double.parseDouble(durre);
        try {
            Enchere.updateCommission(d);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
