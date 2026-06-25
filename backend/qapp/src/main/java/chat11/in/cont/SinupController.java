package chat11.in.cont;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import chat11.in.SinupSer;
import chat11.in.dto.LoginRequest;
import chat11.in.synup.Sinup;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class SinupController {

    @Autowired
    private SinupSer reposin;

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody Sinup user) {

        // Check email already exists
        if (reposin.findByEmail(user.getEmail()) != null) {
            return ResponseEntity.badRequest().body("Email already exists");
        }

        Sinup savedUser = reposin.save(user);
        return ResponseEntity.ok(savedUser);
    }
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest req) {

        Sinup user = reposin.findByEmail(req.getEmail());

        if (user != null && user.getPassword().equals(req.getPassword())) {

            return ResponseEntity.ok(user);

        }

        return ResponseEntity.badRequest().body("Invalid Email or Password");
    }
}