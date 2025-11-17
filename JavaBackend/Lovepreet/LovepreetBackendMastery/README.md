Got it 👍 — you’re currently inside IntelliJ with a folder named `LovepreetSingh` → `BackendMastery` → `TicketBookingSystem`, but it’s empty and not yet structured as a Java project. Let’s fix this **step by step** so you have a clean structure that works for all videos in that playlist.

---

## 🧱 Step-by-Step: Setting Up Proper Java Project Structure in IntelliJ

### 🥇 Step 1 — Create a New Project (Don’t just open a folder)

1. Open IntelliJ → Click **“New Project”**
2. Select **Java**
3. Choose **SDK** (if not present, install “Temurin 17” or “Oracle OpenJDK 17”)
4. **Uncheck** “Add sample code”
5. Set project name → e.g. `BackendMastery`
6. Set location → `/media/rover/Other Stuff/LovepreetSingh/BackendMastery`
7. Click **Finish**

Now IntelliJ will create:

```
BackendMastery/
│
├── .idea/
├── src/
│   └── Main.java (if you kept sample code)
└── BackendMastery.iml
```

---

### 🥈 Step 2 — Create the Standard Folder Layout

Right-click the **project root** →
**New → Directory → name it `src/main/java`**

Then again create:

```
src/main/resources
src/test/java
```

Your structure now:

```
BackendMastery/
├── src/
│   ├── main/
│   │   ├── java/
│   │   └── resources/
│   └── test/
│       └── java/
```

---

### 🥉 Step 3 — Mark Directories Correctly

Now tell IntelliJ what each folder means:

1. Right-click `src/main/java` → **Mark Directory as → Sources Root**
2. Right-click `src/main/resources` → **Mark Directory as → Resources Root**
3. Right-click `src/test/java` → **Mark Directory as → Test Sources Root**

✅ Now IntelliJ will recognize your packages and code correctly.

---

### 🏗️ Step 4 — Create Your First Package

1. Right-click on `src/main/java` → **New → Package**

2. Name it using domain style:

   ```
   com.vaibhav.ticketbooking
   ```

   (for your first project from the course)

3. Inside this package, create new files:

    * `Main.java`
    * `User.java`
    * `BookingSystem.java`

---

### 🧩 Step 5 — If You’re Doing Multiple Mini Projects

Inside the same project, organize them like this:

```
src/main/java/com/vaibhav/
│
├── ticketbooking/
│   ├── Main.java
│   ├── User.java
│   └── BookingSystem.java
│
├── webserver/
│   ├── Server.java
│   └── ClientHandler.java
│
└── expensetracker/
    ├── Expense.java
    └── ExpenseService.java
```

---

### ⚙️ Step 6 — Optional but Recommended

When you move to **Spring Boot**, create **a new project** for it using:

> File → New → Project → Spring Initializr

That will automatically generate:

```
src/main/java/com/vaibhav/expensetracker/
src/main/resources/
pom.xml
```

---

## 🧠 Quick Recap

| Folder               | Mark As           | Purpose                          |
| -------------------- | ----------------- | -------------------------------- |
| `src/main/java`      | Sources Root      | Your Java source code            |
| `src/main/resources` | Resources Root    | config, `.properties`, templates |
| `src/test/java`      | Test Sources Root | Unit tests                       |
| `.idea/`             | (Auto)            | IntelliJ project metadata        |

---

## 💪 Result

Once you do this, you’ll:

* Be able to create packages normally.
* Have a professional, scalable structure.
* Easily follow Lovepreet’s videos without confusion.
* Reuse the same structure for Spring Boot projects later.

---

Would you like me to give you a **visual text mockup** (like a tree diagram) of *exactly* how your “BackendMastery” project should look *after* setting it up — including folders for “Java basics,” “IRCTC project,” etc.?
That’ll make it crystal clear.
