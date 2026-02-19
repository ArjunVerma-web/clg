// Initialize with one subject
document.addEventListener('DOMContentLoaded', function() {
    // Animate form cards with staggered delay
    const cards = document.querySelectorAll('.form-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('visible');
        }, 300 + (index * 250));
    });
    
    addSubject();
    
    // Initialize custom dropdowns
    initCustomDropdowns();
});

// Custom Dropdown functionality
function initCustomDropdowns() {
    const selectElements = document.querySelectorAll('.form-group select');
    
    selectElements.forEach(select => {
        // Create custom dropdown wrapper
        const wrapper = document.createElement('div');
        wrapper.className = 'custom-select';
        wrapper.innerHTML = `
            <div class="custom-select-trigger">
                <span class="custom-select-value">${select.querySelector('option')?.textContent || 'Select'}</span>
                <span class="custom-select-arrow"></span>
            </div>
            <div class="custom-select-dropdown">
            </div>
        `;
        
        // Wrap the select element
        select.parentNode.insertBefore(wrapper, select);
        wrapper.appendChild(select);
        
        const trigger = wrapper.querySelector('.custom-select-trigger');
        const dropdown = wrapper.querySelector('.custom-select-dropdown');
        const valueSpan = wrapper.querySelector('.custom-select-value');
        
        // Build dropdown options from select options
        const options = select.querySelectorAll('option');
        options.forEach(option => {
            if (option.value === '') return; // Skip placeholder
            const dropdownOption = document.createElement('div');
            dropdownOption.className = 'custom-select-option';
            dropdownOption.textContent = option.textContent;
            dropdownOption.dataset.value = option.value;
            dropdownOption.addEventListener('click', () => {
                select.value = option.value;
                valueSpan.textContent = option.textContent;
                select.dispatchEvent(new Event('change'));
                closeDropdown();
            });
            dropdown.appendChild(dropdownOption);
        });
        
        // Toggle dropdown
        function toggleDropdown() {
            const isOpen = wrapper.classList.contains('open');
            closeAllDropdowns();
            if (!isOpen) {
                wrapper.classList.add('open');
                dropdown.style.maxHeight = '0';
                dropdown.style.opacity = '0';
                dropdown.style.transform = 'translateY(-10px)';
                
                // Trigger reflow
                dropdown.offsetHeight;
                
                // Animate open
                dropdown.style.transition = 'all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                dropdown.style.maxHeight = (dropdown.scrollHeight + 10) + 'px';
                dropdown.style.opacity = '1';
                dropdown.style.transform = 'translateY(0)';
                
                // Update selected option styling
                updateSelectedOption();
            }
        }
        
        function closeDropdown() {
            wrapper.classList.remove('open');
            dropdown.style.transition = 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            dropdown.style.maxHeight = '0';
            dropdown.style.opacity = '0';
            dropdown.style.transform = 'translateY(-10px)';
        }
        
        function closeAllDropdowns() {
            document.querySelectorAll('.custom-select.open').forEach(openWrapper => {
                const openDropdown = openWrapper.querySelector('.custom-select-dropdown');
                openWrapper.classList.remove('open');
                openDropdown.style.transition = 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                openDropdown.style.maxHeight = '0';
                openDropdown.style.opacity = '0';
                openDropdown.style.transform = 'translateY(-10px)';
            });
        }
        
        function updateSelectedOption() {
            const selectedValue = select.value;
            dropdown.querySelectorAll('.custom-select-option').forEach(opt => {
                if (opt.dataset.value === selectedValue) {
                    opt.classList.add('selected');
                } else {
                    opt.classList.remove('selected');
                }
            });
        }
        
        trigger.addEventListener('click', toggleDropdown);
        
        // Close on outside click
        document.addEventListener('click', (e) => {
            if (!wrapper.contains(e.target)) {
                closeDropdown();
            }
        });
        
        // Sync with original select changes
        select.addEventListener('change', () => {
            const selectedOption = select.options[select.selectedIndex];
            valueSpan.textContent = selectedOption.text;
            updateSelectedOption();
        });
    });
}

// Add Subject Function with animation
function addSubject() {
    const container = document.getElementById('subjectsContainer');
    const currentSubjects = container.getElementsByClassName('subject-entry');
    const newSubjectNumber = currentSubjects.length + 1;
    
    const subjectDiv = document.createElement('div');
    subjectDiv.className = 'subject-entry';
    subjectDiv.id = 'subject_' + newSubjectNumber + '_' + Date.now();
    subjectDiv.style.opacity = '0';
    subjectDiv.style.transform = 'translateX(-25px)';
    subjectDiv.style.maxHeight = '0';
    subjectDiv.style.marginBottom = '0';
    subjectDiv.style.padding = '0 20px';
    subjectDiv.style.overflow = 'hidden';
    subjectDiv.innerHTML = `
        <div class="subject-header">
            <h4>Subject ${newSubjectNumber}</h4>
            ${newSubjectNumber > 1 ? `<button type="button" class="remove-subject" onclick="removeSubject(this)">Remove</button>` : ''}
        </div>
        <div class="subject-grid">
            <div class="form-group">
                <label for="subjectName_${newSubjectNumber}">Subject Name <span class="required">*</span></label>
                <input type="text" id="subjectName_${newSubjectNumber}" name="subjectName_${newSubjectNumber}" placeholder="Enter subject name" required>
            </div>
            <div class="form-group">
                <label for="subjectCode_${newSubjectNumber}">Subject Code <span class="required">*</span></label>
                <input type="text" id="subjectCode_${newSubjectNumber}" name="subjectCode_${newSubjectNumber}" placeholder="Enter subject code" required>
            </div>
        </div>
    `;
    
    container.appendChild(subjectDiv);
    
    // Trigger reflow
    subjectDiv.offsetHeight;
    
    // Animate new subject with smooth transition
    subjectDiv.style.transition = 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    subjectDiv.style.opacity = '1';
    subjectDiv.style.transform = 'translateX(0)';
    subjectDiv.style.maxHeight = '500px';
    subjectDiv.style.marginBottom = '18px';
    subjectDiv.style.padding = '20px';
    
    // Update all remove buttons visibility
    updateRemoveButtons();
}

// Remove Subject Function with animation
function removeSubject(button) {
    const subjectDiv = button.closest('.subject-entry');
    const container = document.getElementById('subjectsContainer');
    
    if (subjectDiv) {
        // First animate out
        subjectDiv.style.transition = 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        subjectDiv.style.opacity = '0';
        subjectDiv.style.transform = 'translateX(25px)';
        subjectDiv.style.maxHeight = '0';
        subjectDiv.style.marginBottom = '0';
        subjectDiv.style.padding = '0 20px';
        
        // Then remove after animation completes
        setTimeout(() => {
            subjectDiv.remove();
            renumberSubjects();
        }, 400);
    }
}

// Renumber all subjects based on current order
function renumberSubjects() {
    const container = document.getElementById('subjectsContainer');
    const subjects = container.getElementsByClassName('subject-entry');
    
    Array.from(subjects).forEach((subject, index) => {
        const newNumber = index + 1;
        const header = subject.querySelector('.subject-header h4');
        header.textContent = 'Subject ' + newNumber;
        
        // Update remove button visibility
        const removeBtn = subject.querySelector('.remove-subject');
        if (removeBtn) {
            removeBtn.style.display = newNumber > 1 ? 'block' : 'none';
        }
    });
}

// Update remove button visibility for all subjects
function updateRemoveButtons() {
    const container = document.getElementById('subjectsContainer');
    const subjects = container.getElementsByClassName('subject-entry');
    
    Array.from(subjects).forEach((subject, index) => {
        const removeBtn = subject.querySelector('.remove-subject');
        if (removeBtn) {
            removeBtn.style.display = subjects.length > 1 ? 'block' : 'none';
        }
    });
}

// Form Submission with enhanced effects
document.getElementById('carryOverForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Show loading
    const loading = document.getElementById('loading');
    loading.classList.add('show');
    
    // Collect form data
    const formData = {
        studentName: document.getElementById('studentName').value,
        fatherName: document.getElementById('fatherName').value,
        rollNumber: document.getElementById('rollNumber').value,
        enrollmentNumber: document.getElementById('enrollmentNumber').value,
        contact: document.getElementById('contact').value,
        course: document.getElementById('course').value,
        semester: document.getElementById('semester').value,
        year: document.getElementById('year').value,
        semesterType: document.querySelector('input[name="semesterType"]:checked')?.value,
        subjects: []
    };

    // Collect subject details
    const subjects = document.getElementById('subjectsContainer').getElementsByClassName('subject-entry');
    Array.from(subjects).forEach((subject, index) => {
        const nameInput = subject.querySelector('input[name^="subjectName_"]');
        const codeInput = subject.querySelector('input[name^="subjectCode_"]');
        if (nameInput && codeInput) {
            formData.subjects.push({
                name: nameInput.value,
                code: codeInput.value
            });
        }
    });

    // Log form data to console
    console.log('CarryOver Form Submission:', formData);

    // Simulate server delay
    setTimeout(() => {
        // Hide loading
        loading.classList.remove('show');
        
        // Show success message
        const successMessage = document.getElementById('successMessage');
        successMessage.classList.add('show');

        // Scroll to top to see message
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Reset form after delay
        setTimeout(() => {
            document.getElementById('carryOverForm').reset();
            // Reset subjects to one
            const container = document.getElementById('subjectsContainer');
            container.innerHTML = '';
            addSubject();
            
            // Hide success message after some time
            setTimeout(() => {
                successMessage.classList.remove('show');
            }, 5000);
        }, 2000);
    }, 1500);
});

// Add input focus animations
document.querySelectorAll('.form-group input, .form-group select').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.classList.remove('focused');
    });
});

