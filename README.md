# AngularShareDataAsService

## Steps:

1. create `dataService` 
```
ng g s data
```
2. create inital messageSoruce as `BehaviorSubject` for data sharing
3. create `currentMessage` as `asObservable` in `dataService`

```
  private messageSource = new BehaviorSubject<string>("default message");
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }

```

4. Add `dataService` as Dependencies injection in consturctor in required components
5. `subscribe` it to `currentMessage` 
6. create `newMessage()` method to publish new message


```
  message:string;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
  }

  newMessage(){
    this.data.changeMessage("hello from sibling 1");
  }

```

7. `newMessage()` will be invoked on click on button (event binding) in html files

```
<button (click)="newMessage()">Sibling 2</button>
```

