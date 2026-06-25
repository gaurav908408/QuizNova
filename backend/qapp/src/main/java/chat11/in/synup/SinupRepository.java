package chat11.in.synup;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SinupRepository extends JpaRepository<Sinup, Long> {

    Optional<Sinup> findByEmail(String email);

}