package chat11.in.cont;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import chat11.in.service.CategoryService;
import chat11.in.synup.Category;

@RestController
public class CatController {

    @Autowired
    private CategoryService catrepo;

    @PostMapping("/category")
    public Category category(@RequestBody Category gt) {
        return catrepo.save(gt);
    }
    
    @GetMapping("/categories")
    public List<Category> getAllCategories() {
        return catrepo.findAll();
    }
}