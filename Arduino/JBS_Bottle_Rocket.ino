#define RELAY_TIMEOUT 1000


unsigned long Relays[] = {0,0,0,0,0,0,0,0};


void setup() 
{
  Serial.begin(9600);
  Serial.print("Ready");
  for(uint8_t i = 5; i<13; i++){
    pinMode(i,OUTPUT);
    digitalWrite(i,HIGH);    
  }
  
}  

void loop() {
  Check_Latch_Time();
}

void serialEvent()
{
  while (Serial.available())
  {
    uint8_t input = Serial.read();
    Process_Relays(input);
    /*
     * If you want to add additional values
     * This is the place to add it.
     */
    
  }
}

void Process_Relays(uint8_t input){
  for(uint8_t i = 5; i<13; i++){

      bool value = (input>>(i-5)) & 1;
      
      if(Relays[i-5] == 0 && value)
      {
        Relays[i-5] = millis();
        digitalWrite(i,LOW);
      }
    }
}

void Check_Latch_Time()
{  
   unsigned long current_time = millis();
   for(uint8_t i = 5; i < 13; i++){
    if(current_time - Relays[i-5]  > RELAY_TIMEOUT)
    {
      Relays[i-5] = 0;
      digitalWrite(i,HIGH);
    }
   }
  
}

