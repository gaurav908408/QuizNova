package chat11.in;

import org.springframework.data.jpa.repository.JpaRepository;
import chat11.in.synup.Sinup;

public interface SinupSer extends JpaRepository<Sinup, Long> {

    Sinup findByEmail(String email);

}