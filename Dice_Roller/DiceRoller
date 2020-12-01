import tkinter as tk
from tkinter import ttk
from tkinter import messagebox
import random as r

def main():
	program = DiceRoller()

	program.window.mainloop()

class Die():
	'''
	Creates the dice object and handles each one's labels and functions.
	'''

	def __init__(self, num, pos, parent, parent2):
		'''
		Creates, in order, the leftmost label for the die,
		the input field for number to roll,
		the button to roll the die,
		and the final right label to give the user their rolls.
		'''

		self.max = num
		
		self.diestr = 'd' + str(num)
		
		self.d_name = ttk.Label(parent, text=self.diestr)
		self.d_name.grid(row=pos, column=0, sticky = tk.W, padx=5)

		self.input = tk.Entry(parent)
		self.input.grid(row=pos, column=1)
		self.input_value = tk.IntVar()
		self.input_value.set(1)
		self.input['textvariable'] = self.input_value
		self.input.bind('<Return>', self.roll_shortcut)

		self.button = ttk.Button(parent, text='Roll!')
		self.button.grid(row=pos, column=2, sticky = tk.E, padx=5)
		self.button['command'] = self.roll_dice

		self.roll = ttk.Label(parent2, text='0')
		self.roll.grid(row=pos, column=0, sticky = tk.W + tk.N + tk.S, padx=3, pady=3)

	def roll_shortcut(self, event):
		'''
		A shortcut to allow the user to press enter to call the event.
		Might be a better way to handle this, but I don't know it.
		'''
		self.roll_dice()

	def roll_dice(self):
		'''
		Picks a random number within limits of the dice and keeps track of the total and which numbers were rolled.
		'''		

		total = 0
		rolls = ''

		try:
			iter = self.input_value.get()
			for i in range(iter):
				num = r.randint(1, self.max)
				rolls += str(num) + ', '
				total += num
			self.roll['text'] = '{}: {}'.format(total, rolls[:-2])

		except:
			messagebox.showerror('Error', 'Please enter a valid number over 0')
			self.roll['text'] = '0'

		return total


class DiceRoller():
	'''
	Creates the frames for die objects and then creates the dice.
	'''
	
	def __init__(self):
		self.window = tk.Tk()
		self.window.title('Dice Roller')		

		self.frame = ttk.LabelFrame(self.window, text='Available Dice')
		self.frame.grid(row=1, column=0, sticky=tk.E + tk.W + tk.N + tk.S, padx=10, pady=10)
		
		self.frame2 = ttk.LabelFrame(self.window, text='Rolled:')
		self.frame2.grid(row=1, column=2, sticky=tk.E + tk.W + tk.N + tk.S, padx=10, pady=10)

		self.create_dice()
		
	def create_dice(self):
		d4 = Die(4, 0, self.frame, self.frame2)
		d6 = Die(6, 1, self.frame, self.frame2)
		d8 = Die(8, 2, self.frame, self.frame2)
		d10 = Die(10, 3, self.frame, self.frame2)
		d12 = Die(12, 4, self.frame, self.frame2)
		d20 = Die(20, 5, self.frame, self.frame2)
		d100 = Die(100, 6, self.frame, self.frame2)


if __name__ == "__main__":
	main()
