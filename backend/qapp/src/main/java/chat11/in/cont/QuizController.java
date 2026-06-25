package chat11.in.cont;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import chat11.in.dto.AnswerRequest;
import chat11.in.dto.SubmitQuizRequest;
import chat11.in.service.QuesjService;
import chat11.in.service.ResultRepository;
import chat11.in.synup.QuesJ;
import chat11.in.synup.Result;

@RestController
public class QuizController {

    @Autowired
    private QuesjService questionRepo;

    @Autowired
    private ResultRepository resultRepo;

    @PostMapping("/submitQuiz")
    public Result submitQuiz(@RequestBody SubmitQuizRequest request) {

        int correct = 0;

        for (AnswerRequest ans : request.getAnswers()) {

            Optional<QuesJ> question = questionRepo.findById(ans.getQuestionId());

            if (question.isPresent()) {

                if (question.get().getCorrectAnswer()
                        .equalsIgnoreCase(ans.getSelectedAnswer())) {

                    correct++;

                }
            }
        }

        Result result = new Result();

        result.setUserId(request.getUserId());
        result.setCategory(request.getCategory());
        result.setTotalQuestions(request.getAnswers().size());
        result.setCorrectAnswers(correct);
        result.setWrongAnswers(request.getAnswers().size() - correct);
        result.setScore(correct);

        return resultRepo.save(result);
    }

}