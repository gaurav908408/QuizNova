package chat11.in.cont;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import chat11.in.service.QuesjService;
import chat11.in.synup.QuesJ;

@RestController
@CrossOrigin(origins = {
    "http://localhost:5173",
    "https://quiz-nova-pi.vercel.app",
    "https://quiz-nova-git-main-gaurav9084.vercel.app"
})public class QuesjaController {

    @Autowired
    private QuesjService quesService;

    // Add Question
    @PostMapping("/question")
    public QuesJ addQuestion(@RequestBody QuesJ question) {

        return quesService.save(question);

    }

    // Get All Questions
    @GetMapping("/questions")
    public List<QuesJ> getAllQuestions() {

        return quesService.findAll();

    }

    // Get Questions By Category
    @GetMapping("/question/{category}")
    public List<QuesJ> getQuestionByCategory(
            @PathVariable("category") String category) {

        return quesService.findByCategory(category);
    }
    }

