package com.backend.services;

import com.backend.dtos.RegistrationCompanyRequest;
import com.backend.mail.EmailValidator;
import com.backend.dtos.RegistrationUserRequest;
import com.backend.pojos.*;
import com.backend.repositories.RepositoryContinents;
import com.backend.repositories.RepositoryRole;
import com.backend.security.AccountDetailsServiceImpl;
import com.backend.mail.EmailSender;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
@AllArgsConstructor
public class ServiceRegistration {

    private final AccountDetailsServiceImpl accountDetailsServiceImpl;
    private final EmailValidator emailValidator;
    private final RepositoryRole repositoryRole;
    private final ConfirmationTokenService confirmationTokenService;
    private final EmailSender emailSender;
    private final RepositoryContinents repositoryContinents;


    public String registerUser(RegistrationUserRequest request) {
        boolean isValidEmail = emailValidator.
                test(request.getUserEmail());

        if (!isValidEmail) {
            throw new IllegalStateException("email not valid");
        }

        Users user = new Users();
        user.setUserName(request.getUserName());
        user.setUserEmail(request.getUserEmail());
        user.setUserPassword(request.getUserPassword());
        user.setUserCity(request.getUserCity());
        user.setUserCountry(request.getUserCountry());
        user.setUserZip(request.getUserZip());
        user.setUserRegistrationDate(LocalDateTime.now());
        user.setUserIp(request.getUserIp());
        user.setUserAddress(request.getUserAddress());
        user.setUserAddress2(request.getUserAddress2());
        user.setUserPhone(request.getUserPhone());
        user.setUserPhoto(request.getUserPhoto());
        user.setUserProfileBack(request.getUserProfileBack());

//        user.setUserEmailVerified(request.getEnable());

        Roles role;
        if (request.getUserEmail().equals("sapce.y@inbox.ru") ||
                request.getUserEmail().equals("sapce.y477@gmail.com") ||
                request.getUserEmail().equals("israelaliyev36@gmail.com")) {


            role = repositoryRole.findById(1L).orElse(null);

        } else {

            role = repositoryRole.findById(2L).orElse(null);
        }

        user.setUserRole(role);

        String token = accountDetailsServiceImpl.signUpUser(user);


        String link = "http://localhost:8080/registration/confirm?token=" + token;
        emailSender.send(
                request.getUserEmail(),
                buildEmail(request.getUserName(), link));

        return token;

    }


    public String registerCompany(RegistrationCompanyRequest request) {
        boolean isValidEmail = emailValidator.
                test(request.getCompanyEmail());

        if (!isValidEmail) {
            throw new IllegalStateException("email not valid");
        }


        Companies company = new Companies();
        company.setCompanyEmail(request.getCompanyEmail());
        company.setCompanyPassword(request.getCompanyPassword());
        company.setCompanyName(request.getCompanyName());
        company.setCompanyCountry(request.getCompanyCountry());
        company.setCompanyCity(request.getCompanyCity());
        company.setCompanyZip(request.getCompanyZip());
        company.setCompanyBusinessType(request.getCompanyBusinessType());
        company.setCompanyTotalAnnualRevenue(request.getCompanyTotalAnnualRevenue());
        company.setCompanyYearEstablished(request.getCompanyYearEstablished());
        company.setCompanyRegistrationDate(LocalDateTime.now());
        company.setCompanyIp(request.getCompanyIp());
        company.setCompanyAddress(request.getCompanyAddress());
        company.setCompanyProfilePhoto(request.getCompanyProfilePhoto());
        company.setCompanyPhone(request.getCompanyPhone());
        company.setCompanyEmployees(request.getCompanyEmployees());
        company.setCompanyDesc(request.getCompanyDesc());
        company.setCompanyProfileBack(request.getCompanyProfileBack());
        company.setCompanyOtherAddress(request.getCompanyOtherAddress());
        company.setCompaniesDetailsImagesAndVideos(request.getCompaniesDetailsImagesAndVideos());
        company.setCompaniesDetailsProductionCertifications(request.getCompaniesDetailsProductionCertifications());


        if(request.getCompaniesDetailsContinents() != null){

            Set<Continents> continentsList = new HashSet<Continents>();

            for(Continents c : request.getCompaniesDetailsContinents()){

                repositoryContinents.findById(c.getContinentId()).ifPresent(continentsList :: add);
            }

            company.setCompaniesDetailsContinents(continentsList);

        }


//        user.setUserEmailVerified(request.getEnable());

        Roles role;

        if (request.getCompanyEmail().equals("sapce.y@inbox.ru") ||
                request.getCompanyEmail().equals("sapce.y477@gmail.com") ||
                request.getCompanyEmail().equals("israelaliyev36@gmail.com")) {


            role = repositoryRole.findById(1L).orElse(null);

        } else {

            role = repositoryRole.findById(2L).orElse(null);
        }

        company.setCompanyRole(role);

        String token = accountDetailsServiceImpl.signUpCompany(company);


        String link = "http://localhost:8080/registration/confirm?token=" + token;
        emailSender.send(
                request.getCompanyEmail(),
                buildEmail(request.getCompanyName(), link));

        return token;
    }


    @Transactional
    public String confirmToken(String token) {

        EmailConfirmationToken confirmationToken = confirmationTokenService
                .getToken(token)
                .orElseThrow(() ->
                        new IllegalStateException("token not found"));

        if (confirmationToken.getConfirmedDate() != null) {
            throw new IllegalStateException("email already confirmed");
        }


        confirmationTokenService.setConfirmedDate(token);


        if (confirmationToken.getUser() != null) {

            accountDetailsServiceImpl.enableAppUser(confirmationToken.getUser().getUserEmail());
        } else {

            accountDetailsServiceImpl.enableAppCompany(confirmationToken.getCompany().getCompanyEmail());
        }

        return "confirmed";
    }


    private String buildEmail(String name, String link) {
        return "<div style=\"font-family:Helvetica,Arial,sans-serif;font-size:16px;margin:0;color:#0b0c0c\">\n" +
                "\n" +
                "<span style=\"display:none;font-size:1px;color:#fff;max-height:0\"></span>\n" +
                "\n" +
                "  <table role=\"presentation\" width=\"100%\" style=\"border-collapse:collapse;min-width:100%;width:100%!important\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\n" +
                "    <tbody><tr>\n" +
                "      <td width=\"100%\" height=\"53\" bgcolor=\"#0b0c0c\">\n" +
                "        \n" +
                "        <table role=\"presentation\" width=\"100%\" style=\"border-collapse:collapse;max-width:580px\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" align=\"center\">\n" +
                "          <tbody><tr>\n" +
                "            <td width=\"70\" bgcolor=\"#0b0c0c\" valign=\"middle\">\n" +
                "                <table role=\"presentation\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-collapse:collapse\">\n" +
                "                  <tbody><tr>\n" +
                "                    <td style=\"padding-left:10px\">\n" +
                "                  \n" +
                "                    </td>\n" +
                "                    <td style=\"font-size:28px;line-height:1.315789474;Margin-top:4px;padding-left:10px\">\n" +
                "                      <span style=\"font-family:Helvetica,Arial,sans-serif;font-weight:700;color:#ffffff;text-decoration:none;vertical-align:top;display:inline-block\">Confirm your email</span>\n" +
                "                    </td>\n" +
                "                  </tr>\n" +
                "                </tbody></table>\n" +
                "              </a>\n" +
                "            </td>\n" +
                "          </tr>\n" +
                "        </tbody></table>\n" +
                "        \n" +
                "      </td>\n" +
                "    </tr>\n" +
                "  </tbody></table>\n" +
                "  <table role=\"presentation\" class=\"m_-6186904992287805515content\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-collapse:collapse;max-width:580px;width:100%!important\" width=\"100%\">\n" +
                "    <tbody><tr>\n" +
                "      <td width=\"10\" height=\"10\" valign=\"middle\"></td>\n" +
                "      <td>\n" +
                "        \n" +
                "                <table role=\"presentation\" width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-collapse:collapse\">\n" +
                "                  <tbody><tr>\n" +
                "                    <td bgcolor=\"#1D70B8\" width=\"100%\" height=\"10\"></td>\n" +
                "                  </tr>\n" +
                "                </tbody></table>\n" +
                "        \n" +
                "      </td>\n" +
                "      <td width=\"10\" valign=\"middle\" height=\"10\"></td>\n" +
                "    </tr>\n" +
                "  </tbody></table>\n" +
                "\n" +
                "\n" +
                "\n" +
                "  <table role=\"presentation\" class=\"m_-6186904992287805515content\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-collapse:collapse;max-width:580px;width:100%!important\" width=\"100%\">\n" +
                "    <tbody><tr>\n" +
                "      <td height=\"30\"><br></td>\n" +
                "    </tr>\n" +
                "    <tr>\n" +
                "      <td width=\"10\" valign=\"middle\"><br></td>\n" +
                "      <td style=\"font-family:Helvetica,Arial,sans-serif;font-size:19px;line-height:1.315789474;max-width:560px\">\n" +
                "        \n" +
                "            <p style=\"Margin:0 0 20px 0;font-size:19px;line-height:25px;color:#0b0c0c\">Hi " + name + ",</p><p style=\"Margin:0 0 20px 0;font-size:19px;line-height:25px;color:#0b0c0c\"> Thank you for registering. Please click on the below link to activate your account: </p><blockquote style=\"Margin:0 0 20px 0;border-left:10px solid #b1b4b6;padding:15px 0 0.1px 15px;font-size:19px;line-height:25px\"><p style=\"Margin:0 0 20px 0;font-size:19px;line-height:25px;color:#0b0c0c\"> <a href=\"" + link + "\">Activate Now</a> </p></blockquote>\n If you do not activate your account, you cannot log in to Metbix.com. <p>See you soon</p>" +
                "        \n" +
                "      </td>\n" +
                "      <td width=\"10\" valign=\"middle\"><br></td>\n" +
                "    </tr>\n" +
                "    <tr>\n" +
                "      <td height=\"30\"><br></td>\n" +
                "    </tr>\n" +
                "  </tbody></table><div class=\"yj6qo\"></div><div class=\"adL\">\n" +
                "\n" +
                "</div></div>";
    }
}
