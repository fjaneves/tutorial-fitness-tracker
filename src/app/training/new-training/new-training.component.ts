import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';
import { NgForm } from '@angular/forms'
import { Subscription } from 'rxjs';
import { UIService } from 'src/app/shared/ui.service';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit, OnDestroy {

  exercises: Exercise[];
  exerciseSubscription: Subscription;
  loadingSubs: Subscription;

  isLoading = false;

  constructor(private trainingService: TrainingService, private uiService: UIService) { }

  ngOnInit(): void {
    
    this.exerciseSubscription = this.trainingService.exercisesChanged.subscribe(exercises => {
      this.exercises = exercises;
    });

    this.loadingSubs = this.uiService.loadingStateChanges.subscribe(result => {
      this.isLoading = result;
    })

    this.fetchExercises();
  }

  onStartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise);
  }

  fetchExercises(){
    this.trainingService.fetchAvailableExercices();
  }

  ngOnDestroy(){
    this.exerciseSubscription.unsubscribe();
    this.loadingSubs.unsubscribe();
  }
}

